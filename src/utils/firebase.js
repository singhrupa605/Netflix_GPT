// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnIXlqh0H8GSU6SlJBD5oUSY6Hf5Gt2vM",
  authDomain: "movielix-af506.firebaseapp.com",
  projectId: "movielix-af506",
  storageBucket: "movielix-af506.firebasestorage.app",
  messagingSenderId: "106263341913",
  appId: "1:106263341913:web:20de249ba188fda2f23a48",
  measurementId: "G-T0MZNF8BYM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
