import { db } from "@/app/database/firebase";
import { doc, getDoc } from "firebase/firestore";

/**
 * @author Mie
 * @con Kjartan, ChatGPT, CODEIUM (for JSDoc)
 * 
 * Finner navnet til bedrift ved hjel av egen collection, søker med id for bedriften 
 * Altså - søker ikke som query i dokumentet men heller nøkkelen til dokumentet
 *
 * @param {string} bedriftID - id
 * @return {object} - navnet til bedrift eller null 
 */
export async function hentBedriftNavn(bedriftID) {
 
    const docRef = doc(db, "bedrift", bedriftID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        //console.log("Dokument data:", docSnap.data());
        return docSnap.data().bedriftNavn;
      } else {
        // Fant ikke dokument
        console.log("Ingen dokument med denne ID");
        return null;
      }

}