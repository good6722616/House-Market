// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbRctcJybOZb3VnZDmVkmYa0OBJghHkcA",
  authDomain: "house-market-place-app-514d1.firebaseapp.com",
  projectId: "house-market-place-app-514d1",
  storageBucket: "house-market-place-app-514d1.appspot.com",
  messagingSenderId: "26551743936",
  appId: "1:26551743936:web:277d892bfa5de18d590425",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
