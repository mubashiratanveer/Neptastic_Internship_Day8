
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBaoA42u8atacYH257TwCWYEvvbGUcV-MM",
  authDomain: "authentication-7dff7.firebaseapp.com",
  projectId: "authentication-7dff7",
  storageBucket: "authentication-7dff7.firebasestorage.app",
  messagingSenderId: "1054688218135",
  appId: "1:1054688218135:web:d4ab8fd05c6bf1ab56a052"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth}