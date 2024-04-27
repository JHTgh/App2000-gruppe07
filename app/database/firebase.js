import { initializeApp } from "firebase/app";
import { getFirestore, query, where, getDoc, collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

/* -- Satt opp av Jørgen --*/
const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const storageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
const messagingSenderId = process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID;
const appId = process.env.NEXT_PUBLIC_FIREBASE_APP_ID;

export const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId
};


const firebase = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth(firebase); 
export default firebase;