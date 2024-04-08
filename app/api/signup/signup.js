import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { auth } from '../../database/firebase';
import { db } from '../../database/firebase';
import bcryptjs from 'bcryptjs';

/***************Registrering*******************/ 
// Funksjon for å håndtere skjemainnsending

export const handleRegSubmit = async (formData) => {

  // Henter verdier fra skjemaet
  const email = formData.email;
  const password = formData.password;
  const bedriftNavn = formData.bedriftNavn;
  //const username = event.target.username.value;
  console.log('Registrering av bruker startet');
  console.log('email: ' + email + ' password: ' + password + ' bedriftNavn: ' + bedriftNavn);

  try {

    const hashedPassword = await bcryptjs.hash(password, 10);
    // Oppretter brukerkonto i Firebase Authentication
    
    const userCredential = await createUserWithEmailAndPassword(auth, email, hashedPassword);
    const user = userCredential.user;

    // Lagre brukeropplysninger i Firestore
    db;
    await addDoc(collection(db, 'bedrift'), {
      //uid: user.uid,
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
