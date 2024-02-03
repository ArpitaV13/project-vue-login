import { defineStore } from 'pinia';
import { auth } from '../firebase';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null
  }),
  actions: {
    async login(details) {
      const { email, password } = details;
      try {
        await signInWithEmailAndPassword(this.auth, email, password);
        this.user = this.auth.currentUser;
        this.router.push('/');
      } catch (error) {
        console.log("Could not sign in:", error.message);
      }
    },

    clearUser() {
      this.user = null;
    },

    async register(details) {
      const { email, password } = details;

      try {
        await createUserWithEmailAndPassword(this.auth, email, password);
        this.user= auth.currentUser;
        
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
        // Clear user state in the store (if you are using a store)
        this.clearUser();
        // Redirect or perform any other actions after logout
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
