// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// /***************Innlogging*******************/
// // Funksjon for å håndtere skjemainnsending
// const handleLoginSubmit = async (event) => {
//     event.preventDefault();
  
//     // Henter verdier fra skjemaet
//     const email = event.target.email.value;
//     const password = event.target.password.value;
  
//     // Logger inn med userCredentials
//     try {
//       const auth = getAuth();
//       signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//           const user = userCredential.user;
//         })
//         alert('Innlogging vellykket');
//     } catch (error) {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorCode, errorMessage);
//     }
// }

// export default handleLoginSubmit;


// /***************Registrering*******************/ 
// // Funksjon for å håndtere skjemainnsending
// const handleRegSubmit = async (event) => {
//     event.preventDefault();
  
//   // Henter verdier fra skjemaet
//   const email = event.target.email.value;
//   const password = event.target.password.value;
//   const name = event.target.name.value;
  
//   try {
//     // Oppretter brukerkonto i firebase auth
//     const auth = getAuth();
//     createUserWithEmailAndPassword(auth, email, password, name)
//       .then((userCredential) => {
//         const user = userCredential.user;
//       })
//       alert('Brukeren ble opprettet!');
//       console.log(name);
  
//     if (password.length < 6)
//       alert('Passordet er for kort! Minst 6 tegn.')
  
//     } catch (error) {
//       console.error('Feil ved oppretting av bruker:', error.message);
//       alert('Noe gikk galt under oppretting av brukeren. Vennligst prøv igjen senere')
//     }
//   }
  
//   export default handleRegSubmit;