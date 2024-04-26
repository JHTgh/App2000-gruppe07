import { db } from "../../../database/firebase";
import { doc, setDoc } from "firebase/firestore";

export async function updateProfil(id, nyData, cId) {
    
    try{
        await setDoc(doc(db, "ansatte", id), {
        Adresse: nyData.adresse,
        Epost: nyData.epost,
        Navn: nyData.navn,
        PostNr: nyData.postNr,
        Stilling: nyData.stilling,
        TestId: nyData.testId,
        CompanyId: cId
        });

        return true;
    }catch(error){
        console.log(error);

        return false;
    }
}
