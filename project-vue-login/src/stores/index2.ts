import { defineStore } from 'pinia';
import router from '../router';
import { auth } from '../firebase';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut 
} from 'firebase/auth';

export const useUserStore = defineStore('user', {
    state: () => ({
      user: null
    }),
    actions: {
      async login(details) {
        const { email, password } = details;
        try {
          await signInWithEmailAndPassword(auth, email, password);
          this.user = auth.currentUser;
          router.push('/');
        } catch (error) {
          console.log("could not sign in")
        }
      },
       clearUser() {
        this.user = null;
      },
      async register(details) {
        const { email, password } = details

        try {
          await createUserWithEmailAndPassword(auth, email, password)
        } catch (error) {
          switch(error.code) {
            case 'auth/email-already-in-use':
              alert("Email already in use")
              break
            case 'auth/invalid-email':
              alert("Invalid email")
              break
            case 'auth/operation-not-allowed':
              alert("Operation not allowed")
              break
            case 'auth/weak-password':
              alert("Weak password")
              break
            default:
              alert("Something went wrong")
          }
      },
      
      async logout() {
        await signOut(auth);
        this.user = null;
        router.push('/login');
      },
      fetchUser() {
        auth.onAuthStateChanged(async user => {
          if (user === null) {
            this.user = null;
          } else {
            this.user = user;
            if (router.isReady() && router.currentRoute.value.path === '/home') {
              router.push('/');
            }
          }
        });
      }
    }
  });