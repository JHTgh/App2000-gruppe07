// henter data fra firestore om score data for en profil - innparameter er testID

import { db } from "@/app/database/firebase";
import { doc, getDoc } from "firebase/firestore";

/**
 * @author Kjartan
 * @contributor ChatGPT
 * Henter test resulater for en profil.
 * 
 * @param {string} testID 
 * @returns {object} Test resulater.
 */
export async function hentScoreData(testID) {
 
    const docRef = doc(db, "testResults", testID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document! (hentScoreData)");
        return null;
      }

}