// henter data fra firestore om score data for en profil - innparameter er testID

import { db } from "@/app/database/firebase";
import { doc, getDoc } from "firebase/firestore";

export async function hentScoreData(testID) {
 
    const docRef = doc(db, "testRes", testID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document! (hentScoreData)");
        return null;
      }

}