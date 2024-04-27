import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../database/firebase";

/* -- Kode skrevet av Marte-Marie Rønningen --*/
export async function leggTilAnsatt(dataForm) {
     const ansatteCollection = collection(db, 'ansatte');

    // all data som skal til database ligger i dataForm
    // nyAnsatt = en profil
    const nyAnsatt = {
        Navn: dataForm.navn,
        Epost: dataForm.epost,
        Adresse: dataForm.adresse,
        testId: dataForm.testId,
        companyId: dataForm.companyId
    }
    console.log("nyAnsatt: ");
    console.log(nyAnsatt);
    try{
         const newEmployeeRef = await addDoc(ansatteCollection, nyAnsatt);
         console.log("ny ansatt lagt til i database" + newEmployeeRef.id);
    }catch(error){
        console.log("Feil ved lagring av ny ansatt");
        console.log(error);
    }
}