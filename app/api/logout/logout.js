import { auth } from "@/app/database/firebase"
import { signOut } from "firebase/auth";

/**
 * @author Kjartan
 * @contributor ChatGPT, CODEIUM (for JSDoc)
 * 
 * En void metode/funksjon for å logge ut. Tar ikke inn noen parametere.
 * bruker Firebase Auth sin metode signOut for å logge ut.
 *
 * 
 */

export const logoutSubmit = async () => {
   auth.signOut().then(() => {
      console.log("Sign-out successful.");
    }).catch((error) => {
      console.log(error);
    });
}