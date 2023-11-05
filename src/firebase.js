// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from "firebase/Database";


const firebaseConfig = {
  apiKey: "AIzaSyAJTDk_9tsgQ7ObzqcIP50m-3GxdlVJ8FM",
  authDomain: "hack-c871e.firebaseapp.com",
  projectId: "hack-c871e",
  storageBucket: "hack-c871e.appspot.com",
  messagingSenderId: "1019654318345",
  appId: "1:1019654318345:web:4ce731e76f71b2733e8bd8",
  measurementId: "G-CBLMGGG0MY"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
