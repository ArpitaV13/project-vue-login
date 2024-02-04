<template>
  <div class="container mx-auto my-8">
    <h2 class="text-3xl font-bold mb-4 text-center">Register</h2>
    <form @submit.prevent="register" class="max-w-md mx-auto">
      <div class="mb-4">
        <label for="email" class="block text-gray-600">Email:</label>
        <input type="email" v-model="email" required class="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500">
      </div>
      <div class="mb-4">
        <label for="password" class="block text-gray-600">Password:</label>
        <input type="password" v-model="password" required class="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500">
      </div>
      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Register
      </button>
      <p class="mt-4">Already a user? <RouterLink to="/login" class="text-blue-500">Login</RouterLink></p>
    </form>
  </div>
</template>


<script>
 import { auth } from '../firebase';
  import { createUserWithEmailAndPassword } from 'firebase/auth';
export default {
  data() {
    return {
      email: '',
      password: '',
      //confirmPassword: '',
    };
  },
  methods: {
    register() {
      createUserWithEmailAndPassword(auth,this.email,this.password)
      // Implement your registration logic using a backend service or Firebase
      console.log('Register clicked');
      this.$router.push('/home');
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
