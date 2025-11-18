// Do not send firebase config to public repo

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB1ovY0F8nafhncifX9dbxHR-z7iShoNs",
  authDomain: "fir-auth-70fc9.firebaseapp.com",
  projectId: "fir-auth-70fc9",
  storageBucket: "fir-auth-70fc9.firebasestorage.app",
  messagingSenderId: "61503395474",
  appId: "1:61503395474:web:7479aff41309e1d80eb84b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
