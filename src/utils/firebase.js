// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz-z53KI8GbA_hk42UbUEgVKbzgfoIIqk",
  authDomain: "flixgpt-e07b0.firebaseapp.com",
  projectId: "flixgpt-e07b0",
  storageBucket: "flixgpt-e07b0.firebasestorage.app",
  messagingSenderId: "290110413022",
  appId: "1:290110413022:web:b3430b246d7920d0b34a4f",
  measurementId: "G-R1Z9K4FF08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth()