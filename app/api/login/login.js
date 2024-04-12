import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, getDocs, query, where, getDoc } from "firebase/firestore";
import { db } from '../../database/firebase';
import bcryptjs from 'bcryptjs';
import { getUserByEmailPromise } from '@/app/database/querys';

/***************Innlogging*******************/
// Funksjon for å håndtere skjemainnsending
export const handleLoginSubmit = async (formData) => {

  const email = formData.email;
  const password = formData.password;
  console.log('prøver å logge inn ( handleLoginSubmit )');
  console.log(email, password);

  // Logg inn brukeren
  try {
    console.log(email, password);
    const auth = getAuth();
    console.log(auth);

    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Innlogging vellykket - bruker: ", userCredential.user);
    return { suksess: true, error: "Innlogging vellykket" };
  
  } catch (error) {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(errorCode, errorMessage);

  let feilmelding = "Feil ved innlogging";
  switch (errorCode) {
    case "auth/wrong-password":
      feilmelding = "Feil passord";
      break;
    case "auth/user-not-found":
      feilmelding = "Bruker ikke funnet";
      break;
    default:
      break;
  }

  return { suksess: false, error: feilmelding };
}

}
