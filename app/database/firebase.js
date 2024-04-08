import { initializeApp } from "firebase/app";
import { getFirestore, query, where, getDoc, collection, getDocs } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAE0IgG0GIHvXQdkML9qj7X2PvlD2fDnoc",
  authDomain: "bigfivedb.firebaseapp.com",
  projectId: "bigfivedb",
  storageBucket: "bigfivedb.appspot.com",
  messagingSenderId: "8239407001",
  appId: "1:8239407001:web:b9337f19178b922bdf3d08"
};


const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase);
export const auth = getAuth(firebase); 
export default firebase;