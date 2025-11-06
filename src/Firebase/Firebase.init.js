// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVCX_mA2pTxrb4aLJurAjiCxzY01FTatU",
  authDomain: "glidefeet-auth.firebaseapp.com",
  projectId: "glidefeet-auth",
  storageBucket: "glidefeet-auth.firebasestorage.app",
  messagingSenderId: "506404732115",
  appId: "1:506404732115:web:4538793966e012c765a826",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);