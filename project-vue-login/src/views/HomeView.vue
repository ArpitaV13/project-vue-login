import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import {defineStore} from 'pinia';

<template>
  <div>
    <h2>Home Page</h2>
   <p>This is the home page</p>
   <button @click="logout">Logout</button>

  </div>
</template>

<script>
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useUserStore } from '@/stores/index';
export default {
  methods: {
    logout() {
      try {
        signOut(auth);
        // If you are using Pinia store, clear the user state
        const store = useUserStore();
        store.clearUser(); // Replace with the actual method in your store
        // Redirect or perform any other actions after logout
        this.$router.push('/login');
      } catch (error) {
        console.error('Logout error:', error.message);
      }
    },
  },
};
//import {useUserStore} from '@/stores/index'
</script>

<style scoped>
/* Add your styles here */
</style>
