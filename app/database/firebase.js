require('dotenv').config();
import { initializeApp } from "firebase/app";
import { getFirestore, query, where, getDoc, collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

/*
const apiKey = process.env.FIREBASE_API_KEY;
const authDomain = process.env.FIREBASE_AUTH_DOMAIN;
const projectId = process.env.FIREBASE_PROJECT_ID;
const storageBucket = process.env.FIREBASE_STORAGE_BUCKET;
const messagingSenderId = process.env.FIREBASE_MESSAGING_SENDER_ID;
const appId = process.env.FIREBASE_APP_ID;

export const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId
};
*/
// midletidig løsning, hvor jeg ikke får hentet gyldig info fra .env fil (selvom det er likt det under..)
const firebaseConfig = {
  apiKey: "AIzaSyC2cHYgLBMWNvTAEUMTXYH0loFXNjHVp6M",
  authDomain: "big5-kjartigjen.firebaseapp.com",
  projectId: "big5-kjartigjen",
  storageBucket: "big5-kjartigjen.appspot.com",
  messagingSenderId: "479510979015",
  appId: "1:479510979015:web:a6fe016353880d52a3f9e2"
};


const firebase = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth(firebase); 
export default firebase;