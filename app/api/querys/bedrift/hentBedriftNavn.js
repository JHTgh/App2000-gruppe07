import { db } from "@/app/database/firebase";
import { doc, getDoc } from "firebase/firestore";

/* -- Kode skrevet av Mie -- */
export async function hentBedriftNavn(bedriftID) {
 
    const docRef = doc(db, "bedrift", bedriftID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Dokument data:", docSnap.data());
        return docSnap.data().bedriftNavn;
      } else {
        // Fant ikke dokument
        console.log("Ingen dokument med denne ID");
        return null;
      }

}