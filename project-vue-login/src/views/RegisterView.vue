<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md bg-white p-8 rounded-md shadow-md">
      <h2 class="text-3xl mb-4 font-bold text-center text-blue-500">Register</h2>
      <form @submit.prevent="register" class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-600">Email:</label>
          <input v-model="email" required class="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-600">Password:</label>
          <input type="password" v-model="password" required class="mt-1 p-2 w-full border rounded-md" />
        </div>
        <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition">Register</button>
        <h3 class="mt-2 text-sm text-gray-600 text-center">Already a user? <router-link to="/" class="text-blue-500">Login</router-link></h3>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useUserStore } from '@/stores/index';
import { useRoute, useRouter } from 'vue-router';

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const userStore = useUserStore();
    const router = useRouter();

    const register = async () => {
      await userStore.register({ email: email.value, password: password.value });
      console.log('Register clicked');
      router.push('/home');
    };

    return {
      email,
      password,
      register
    };
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
