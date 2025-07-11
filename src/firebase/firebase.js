// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxQmvEPv-t_X_8ssdVluZSVBEEkpKznUU",
  authDomain: "netflix-gpt-72685.firebaseapp.com",
  projectId: "netflix-gpt-72685",
  storageBucket: "netflix-gpt-72685.firebasestorage.app",
  messagingSenderId: "828401915870",
  appId: "1:828401915870:web:61551293b00a954fbdaf4f",
  measurementId: "G-V5HBVDWGQL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
