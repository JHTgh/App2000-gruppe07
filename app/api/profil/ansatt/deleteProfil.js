import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../database/firebase";


/**
 * @author Kjartan
 * Sletter en profil.
 * Bruker firestor sin metode for å fjerne ett dokument med dokument id
 *
 * @param {string} id - id for profil
 * @return {boolean} om sletting er velykket eller ikke
 */

export async function deleteProfil(id) {

    try{
        await deleteDoc(doc(db, "ansatte", id));
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}