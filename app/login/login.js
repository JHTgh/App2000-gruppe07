import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

/***************Innlogging*******************/
// Funksjon for å håndtere skjemainnsending
const handleLoginSubmit = async (event) => {
    event.preventDefault();
  
    // Henter verdier fra skjemaet
    const email = event.target.email.value;
    const password = event.target.password.value;
  
    // Logger inn med userCredentials
    try {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        alert('Innlogging vellykket');
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
}

export default handleLoginSubmit;