<script>
import { useUserStore } from '@/stores/index';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const userStore = useUserStore();
    const router = useRouter();

    const logout = async () => {
      try {
        await userStore.logout();
        router.push('/');      
      } catch (error) {
        console.log('Logout error:', error.message);
      }
    };
    userStore.fetchUser();

    return {
      userStore,
      logout
    };
  }
};
</script>

<template>
  <div class="container mx-auto my-8 text-center">
    <h2 class="text-3xl font-bold mb-4">Dashboard</h2>
    <p v-if="userStore.user" class="text-gray-600">Welcome {{ userStore.user.email }}</p>
    <button @click="logout" class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Logout
    </button>
  </div>
</template>

<style scoped>
/* No need for separate styles here */
</style>
