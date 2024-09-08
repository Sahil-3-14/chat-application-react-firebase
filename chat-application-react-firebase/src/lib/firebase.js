// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapplicationreactfire-d16ab.firebaseapp.com",
  projectId: "chatapplicationreactfire-d16ab",
  storageBucket: "chatapplicationreactfire-d16ab.appspot.com",
  messagingSenderId: "444809608318",
  appId: "1:444809608318:web:70fe820a93c28010892c2f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();