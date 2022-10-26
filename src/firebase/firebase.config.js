// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1tAYzExWbR81ZopC6jmTJF1VLfGrZqIk",
  authDomain: "edemy-auth.firebaseapp.com",
  projectId: "edemy-auth",
  storageBucket: "edemy-auth.appspot.com",
  messagingSenderId: "998605799766",
  appId: "1:998605799766:web:377a72152a3c46dc5a56f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;