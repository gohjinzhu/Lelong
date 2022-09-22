import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZ-kCwhJcYeshE3XcFhCcRehMsesB-wHk",
  authDomain: "bidestate-33775.firebaseapp.com",
  projectId: "bidestate-33775",
  storageBucket: "bidestate-33775.appspot.com",
  messagingSenderId: "776501983096",
  appId: "1:776501983096:web:ec545283a59c822891ba8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);