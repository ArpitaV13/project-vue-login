import { defineStore } from 'pinia';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    userName:''
  }),
  actions: {
    async login(details) {
      const { email, password } = details;
      try {
        const userData= await signInWithEmailAndPassword(auth, email, password);
        userName=userData.user.email;
        this.user = auth.currentUser;
      } catch (error) {
        console.log("Could not sign in:", error.message);
      }
    },

    clearUser() {
      this.user = null;
    },

    async register(details) {
      const { name, email, password} = details;
      console.log(details,"Details");
      try {
        const userData= await createUserWithEmailAndPassword(auth, email, password);
        console.log(userData,"USERDATA");
        userName=userData.user.email;
       // this.user= auth.currentUser;
        
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
        await signOut(this.auth);
        this.clearUser();
        this.router.push('/login');
      } catch (error) {
        console.error('Logout error:', error.message);
      }
    },
    
    fetchUser() {
      this.auth.onAuthStateChanged(async user => {
        if (user === null) {
          this.user = null;
        } else {
          this.user = user;
          if (this.router.isReady() && this.router.currentRoute.value.path === '/home') {
            this.router.push('/');
          }
        }
      });
    }
  },
});
