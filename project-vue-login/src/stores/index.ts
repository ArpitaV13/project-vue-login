import { defineStore } from 'pinia';
import { auth } from '../firebase';
import { useRouter } from 'vue-router';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: auth.currentUser,
  }),
  actions: {
    async login(details) {
      const { email, password } = details;
      try {
        const userData = await signInWithEmailAndPassword(auth, email, password);
        this.user = userData.user;
        localStorage.setItem('user', JSON.stringify(this.user)); 
        const router = useRouter();
        router.push('/home');
      } catch (error) {
        console.log("Could not sign in:", error.message);
      }
    },

    clearUser() {
      this.user = null;
      localStorage.removeItem('user'); 
    },

    async register(details) {
      const { email, password} = details;
      try {
        const userData = await createUserWithEmailAndPassword(auth, email, password);
        this.user = userData.user;
        localStorage.setItem('user', JSON.stringify(this.user)); 
      } catch (error) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            alert("Email already in use");
            break;
          case 'auth/invalid-email':
            alert("Invalid email");
            break;
          case 'auth/operation-not-allowed':
            alert("Operation not allowed");
            break;
          case 'auth/weak-password':
            alert("Weak password");
            break;
          default:
            alert("Something went wrong");
        }
      }
    },

    async logout() {
      try {
        await signOut(auth);
        this.clearUser();
        const router = useRouter();
        router.push('/login');
      } catch (error) {
        console.log('Logout error:', error.message);
      }
    },

    fetchUser() {
      const userData = localStorage.getItem('user');
      if (userData) {
        this.user = JSON.parse(userData);
      }

      auth.onAuthStateChanged(user => {
        if (user === null) {
          this.clearUser();
        } else {
          this.user = user;
          const router = useRouter();
          if (router.isReady() && router.currentRoute.value.path === '/home') {
            router.push('/');
          }
        }
      });
    }
  }
});
