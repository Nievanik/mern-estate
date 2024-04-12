// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b9ab3.firebaseapp.com",
  projectId: "mern-estate-b9ab3",
  storageBucket: "mern-estate-b9ab3.appspot.com",
  messagingSenderId: "580014381550",
  appId: "1:580014381550:web:970a9d0c71e340e37756ff"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);