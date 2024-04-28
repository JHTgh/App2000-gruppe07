import { auth } from "@/app/database/firebase"
import { signOut } from "firebase/auth";

/* -- Kode skrevet av Kjartan --*/
export const logoutSubmit = async () => {
   auth.signOut().then(() => {
      console.log("Sign-out successful.");
    }).catch((error) => {
      console.log(error);
    });
}