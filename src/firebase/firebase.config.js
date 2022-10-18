// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUOAyqKuvcZfj_EajfJXO6-k_BXVQvohI",
  authDomain: "booking-auth-3c258.firebaseapp.com",
  projectId: "booking-auth-3c258",
  storageBucket: "booking-auth-3c258.appspot.com",
  messagingSenderId: "645178890474",
  appId: "1:645178890474:web:55c817a573d18ce3c41f93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app