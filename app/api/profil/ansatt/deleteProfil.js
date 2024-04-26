import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../database/firebase";


export async function deleteProfil(id) {

    try{
        await deleteDoc(doc(db, "ansatte", id));
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}