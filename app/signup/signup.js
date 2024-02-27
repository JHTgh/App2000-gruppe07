import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

/***************Registrering*******************/ 
// Funksjon for å håndtere skjemainnsending
const handleRegSubmit = async (event) => {
  event.preventDefault();

  // Henter verdier fra skjemaet
  const email = event.target.email.value;
  const password = event.target.password.value;
  const name = event.target.name.value;
  const username = event.target.username.value;

  try {
    // Oppretter brukerkonto i Firebase Authentication
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Lagre brukeropplysninger i Firestore
    const db = getFirestore();
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      email: email,
      name: name,
      username: username
    });

    alert('Brukeren ble opprettet!');

    if (password.length < 6)
      alert('Passordet er for kort! Minst 6 tegn.')

  } catch (error) {
    console.error('Feil ved oppretting av bruker:', error.message);
    alert('Noe gikk galt under oppretting av brukeren. Vennligst prøv igjen senere')
  }
}

export default handleRegSubmit;
