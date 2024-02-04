<script>

import {mapStores} from 'pinia';
import { useUserStore } from '@/stores/index';

export default { 
  computed:{
    ...mapStores(useUserStore)
  },
  methods: {
    async logout() {
      try {
       await this.userStore.logout();
        this.$router.push('/');
      } catch (error) {
        console.error('Logout error:', error.message);
      }
    },
  },
};
</script>


<template>
  <div class="container mx-auto my-8 text-center">
    <h2 class="text-3xl font-bold mb-4">DashBoard</h2>
    <p class="text-gray-600">Welcome {{ this.userStore.user.email }}</p>
    <button @click="logout" class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Logout
    </button>
  </div>
</template>



<style scoped>

</style>
