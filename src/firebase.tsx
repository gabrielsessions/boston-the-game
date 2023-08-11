// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBK0PZt_HXtdiHfEHviFKx8xGP2h5EioVs",
  authDomain: "splendid-30798.firebaseapp.com",
  projectId: "splendid-30798",
  storageBucket: "splendid-30798.appspot.com",
  messagingSenderId: "489150877141",
  appId: "1:489150877141:web:614ecde6d9280e42a4c15c",
  measurementId: "G-KDJVVHRM8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };