// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFamVM_KJlCeRvC2rMl7Ca6qEAsdR5by8",
  authDomain: "router-firebse-authentication.firebaseapp.com",
  projectId: "router-firebse-authentication",
  storageBucket: "router-firebse-authentication.appspot.com",
  messagingSenderId: "109780504604",
  appId: "1:109780504604:web:25b21e9d942ec07643cfd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;