<template>
  <div>
    <h2>Register</h2>
     <form @submit.prevent="register">
      <div>
      <label for="email">Email:</label>
      <input type="email" v-model="email" required />
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" v-model="password" required />
    </div>
    <!-- <div>
      <label for="confirmPassword">Confirm Password:</label>
      <input type="password" v-model="confirmPassword" required />
    </div> -->
      <button type="submit">Register</button>
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
