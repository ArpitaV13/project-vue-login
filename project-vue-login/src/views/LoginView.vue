<script>
import { ref } from 'vue';
import { useUserStore } from '@/stores/index';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const userStore = useUserStore();
    const router = useRouter();

    const login = async () => {
      try {
        await userStore.login({ email: email.value, password: password.value });
        router.push('/home');
      } catch (error) {
        console.log('Login error:', error.message);
      }
    };

    return {
      email,
      password,
      login
    };
  }
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md bg-white p-8 rounded-md shadow-md">
      <h2 class="text-3xl mb-4 font-bold text-center text-blue-500">Login</h2>
      <form @submit.prevent="login" class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-600">Email:</label>
          <input type="email" v-model="email" required class="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-600">Password:</label>
          <input type="password" v-model="password" required class="mt-1 p-2 w-full border rounded-md" />
        </div>
        <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition">Login</button>
        <h3 class="mt-2 text-sm text-gray-600 text-center">Not a user? <router-link to="/register" class="text-blue-500">Register</router-link></h3>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* No need for separate styles here if using Tailwind CSS classes */
</style>
