import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


/***************Registrering*******************/ 
// Funksjon for å håndtere skjemainnsending
export default async function POST(req){
  preventDefault();

// Henter verdier fra skjemaet
const auth = getAuth();
const firestore = getFirestore(firebase);
const email = target.email.value;
const password = target.password.value;
const name = target.name.value;
const user = await userCredential.user;
const userRef = collection(firestore, "users");

try {
  // Oppretter brukerkonto i firebase auth

  const userCredentials = createUserWithEmailAndPassword(auth, email, name, password)
    auth
    .then((userCredential) => {
      userCredential.user;
    })
    alert('Brukeren ble opprettet!');

    await setDoc(doc(usersRef, user.uid), {
      email,
      name,
      password
    })

  } catch (error) {
    console.error('Feil ved oppretting av bruker:', error.message);
    alert('Noe gikk galt under oppretting av brukeren. Vennligst prøv igjen senere')
  }
}