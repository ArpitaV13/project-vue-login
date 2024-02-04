<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md bg-white p-8 rounded-md shadow-md">
      <h2 class="text-3xl mb-4 font-bold text-center text-blue-500">Register</h2>
      <form @submit.prevent="register" class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-600">Email:</label>
          <input type="email" v-model="email" required class="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-600">Password:</label>
          <input type="password" v-model="password" required class="mt-1 p-2 w-full border rounded-md" />
        </div>
        <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition">Register</button>
        <h3 class="mt-2 text-sm text-gray-600 text-center">Already a user? <RouterLink to="/" class="text-blue-500">Login</RouterLink></h3>
      </form>
    </div>
  </div>
</template>


<script>
 
 import { useUserStore } from '@/stores/index';
 import { RouterLink } from 'vue-router';
 import {mapStores} from 'pinia'

export default {
  computed:{
    ...mapStores(useUserStore)
  },
  methods: {
  
     async register() {
      await this.userStore.register({name:this.name,email:this.email,password:this.password});
      console.log('Register clicked');
      this.$router.push('/home');
    }, 
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
