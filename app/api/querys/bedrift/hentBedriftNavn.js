import { db } from "@/app/database/firebase";
import { doc, getDoc } from "firebase/firestore";

export async function hentBedriftNavn(bedriftID) {
 
    const docRef = doc(db, "bedrift", bedriftID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data().bedriftNavn;
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
        return null;
      }

}