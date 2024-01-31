import { RouterLink, RouterView } from 'vue-router'

<template>
    <div>
      <h2></h2>
      <form @submit.prevent="login">
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
  
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
  
        <button type="submit">Login</button>
        <h3>Not a user, Register </h3>
        <RouterLink to="/register">Register</RouterLink>
      </form>
    </div>
  </template>
  
  <script>
  import { auth } from '../firebase';
  import { signInWithEmailAndPassword } from 'firebase/auth';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      login() {
         signInWithEmailAndPassword(auth, this.email, this.password);
         this.$router.push('/home');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  