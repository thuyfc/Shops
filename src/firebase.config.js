// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAAI5C_WNMk48jPBFf_zlwiJmYmqkDispc",
  authDomain: "shop-culi.firebaseapp.com",
  projectId: "shop-culi",
  storageBucket: "shop-culi.appspot.com",
  messagingSenderId: "1089162349463",
  appId: "1:1089162349463:web:bc21017ef068f25c9b92d2",
  measurementId: "G-DB3D5K7LM4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
