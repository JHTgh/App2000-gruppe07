import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../database/firebase";


export async function deleteProfil(id) {

    try{
        await deleteDoc(doc(db, "ansatt", id));
    } catch (error) {
        console.log(error);
    }
}