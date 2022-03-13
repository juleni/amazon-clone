import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBikq4Od7ZezJkvaMRWUG0eDo-Y9wF_g5Y",
  authDomain: "challenge-507b1.firebaseapp.com",
  projectId: "challenge-507b1",
  storageBucket: "challenge-507b1.appspot.com",
  messagingSenderId: "892130789111",
  appId: "1:892130789111:web:bd3a59c9d4d02ef831b5f2",
  measurementId: "G-M2VT11L1L2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth();

export { db, auth };
