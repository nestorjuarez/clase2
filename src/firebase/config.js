// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-_JoBRgCQrYKCl3QI1Cleekc9RFkiR1w",
  authDomain: "mascotas-cedd0.firebaseapp.com",
  projectId: "mascotas-cedd0",
  storageBucket: "mascotas-cedd0.appspot.com",
  messagingSenderId: "178098990350",
  appId: "1:178098990350:web:bc922f9f7184054b0a7b5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app)