// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1dZ1yNXnMySk-z-Ac2PJqPx0VxT6nJrE",
  authDomain: "fooday-94153.firebaseapp.com",
  projectId: "fooday-94153",
  storageBucket: "fooday-94153.appspot.com",
  messagingSenderId: "935903549468",
  appId: "1:935903549468:web:5bd5188dd2ccab0d0a67d9",
  measurementId: "G-BTRVTLK0HC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth and Firestore services
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
