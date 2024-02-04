<template>
  <div class="container mx-auto my-8 text-center">
    <h2 class="text-3xl font-bold mb-4">Home Page</h2>
    <p class="text-gray-600">This is the home page</p>
    <button @click="logout" class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Logout
    </button>
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
        const store = useUserStore();
        store.clearUser(); 
        this.$router.push('/');
      } catch (error) {
        console.error('Logout error:', error.message);
      }
    },
  },
};
</script>

<style scoped>

</style>
