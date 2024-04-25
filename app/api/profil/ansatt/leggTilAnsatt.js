import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../database/firebase";

export async function leggTilAnsatt(dataForm) {
    console.log("leggTilAnsatt");
    console.log('inndata:', dataForm);
     const ansatteCollection = collection(db, 'ansatte');

    // all data som skal til database ligger i dataForm
    // nyAnsatt = en profil
    const nyAnsatt = {
        Navn: dataForm.navn,
        Stilling: dataForm.stilling,
        Epost: dataForm.epost,
        Adresse: dataForm.adresse,
        PostNr: dataForm.postNr,
        testId: dataForm.testId,
        companyId: dataForm.companyId
    }
    console.log("nyAnsatt: ");
    
    try{
        console.log("try");
         const newEmployeeRef = await addDoc(ansatteCollection, dataForm);
         console.log("ny ansatt lagt til i database" + newEmployeeRef.id);
        return newEmployeeRef;
    }catch(error){
        console.log("Feil ved lagring av ny ansatt (leggTilAnsatt)");
        console.log(error);
    }
}