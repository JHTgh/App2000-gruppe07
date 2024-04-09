import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

/***************Innlogging*******************/
// Funksjon for å håndtere skjemainnsending
export const handleLoginSubmit = async (formData) => {
    
    const email = formData.email;
    const password = formData.password;

    // Hent det krypterte passordet fra databasen
    const bruker = await getUserByEmail(email);
    const encryptedPassword = bruker.password;

    // Sjekker om kryptert passer er likt i databasen
    const hashedPassword = await bcryptjs.hash(password, 10);
    if (await bcryptjs.compare(hashedPassword, encryptedPassword)) {
        console.log('riktig passord');
    } else {
      console.log('Feil passord');
    }


    // Logger inn med userCredentials
    try {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, hashedPassword)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('user: ' + user);
        })
        console.log('Innlogging vellykket');
        console.log(auth?.currentUser?.email);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
}
