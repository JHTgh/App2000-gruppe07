import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, setDoc, doc } from "firebase/firestore";
import { auth } from '../../database/firebase';
import { db } from '../../database/firebase';
import bcryptjs from 'bcryptjs';


/**
 * @author Kjartan
 * @contributor Jørgen, ChatGPT, CODEIUM (for JSDocs)
 * Funksjon for å registrere en ny bruker.
 * Bruker Firebase Auth for å registrere en ny bruker.
 * Et dokument blir også laget i Firestore.
 *
 * @param {Object} formData - opprett bruker-skjemaet.
 * @return {boolean} .suksess - Indikerer hvis registreringen vellykket.
 * @return {String} .error - Sender feilmelding til frontend, hvis det er en
 */


export const handleRegSubmit = async (formData) => {

  // Henter verdier fra skjemaet
  const email = formData.email;
  const password = formData.password;
  const bedriftNavn = formData.bedriftNavn;

  try {
    // Oppretter brukerkonto i Firebase Authentication
    
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Lagre brukeropplysninger i Firestore
    db;
    await setDoc(doc(db, 'bedrift', user.uid), {
      bedriftId: user.uid,
      email: email,
      bedriftNavn: bedriftNavn,
      dato: new Date(),
    
    });

    return {suksess: true};

  } catch (error) {
    console.error('Feil ved oppretting av bruker:', error.message);
    return {suksess: false, error: error.message};
  }
}
