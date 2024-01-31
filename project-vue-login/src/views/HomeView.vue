<template>
  <div>
    <h2>Home Page</h2>
   <p>This is the home page</p>

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
       
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
