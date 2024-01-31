import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD8oKPW1ocYqD79PvQQnBDPmjDrz8XmelQ",
    authDomain: "vue-project-5d4a0.firebaseapp.com",
    projectId: "vue-project-5d4a0",
    storageBucket: "vue-project-5d4a0.appspot.com",
    messagingSenderId: "773112157022",
    appId: "1:773112157022:web:ca09fc565b777430d775cf",
    measurementId: "G-THGEDZDESZ"
  };

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }