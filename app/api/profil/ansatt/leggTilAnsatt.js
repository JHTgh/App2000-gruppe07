import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../database/firebase";

/* -- Kode skrevet av Marte-Marie Rønningen --*/
/**
 * @author Marte-Marie Rønningen
 * @Con Kjartan, ChatGPT, CODEIUM (for JSDoc)
 * Legger til en ny profil i databasen.
 * Lager en referanse til den nye profilen, brukes for å lagre id til profilen senere
 *
 * @param {Object} dataForm - dataen som trengs for å oppdette en bruker
 * @return {Object} returnerer en referanse til den nye profilen
 */
export async function leggTilAnsatt(dataForm) {
    //console.log("leggTilAnsatt");
    //console.log('inndata:', dataForm);
    const ansatteCollection = collection(db, 'ansatte');

    // all data som skal til database ligger i dataForm
    // nyAnsatt = en profil
    const nyAnsatt = {
        Navn: dataForm.navn,
        Stilling: dataForm.stilling,
        Epost: dataForm.epost,
        Adresse: dataForm.adresse,
        PostNr: dataForm.postNr,
        TestId: dataForm.testId,
        CompanyId: dataForm.companyId
    }
    console.log("nyAnsatt: ");
    
    try{
        const newEmployeeRef = await addDoc(ansatteCollection, nyAnsatt);
        //console.log("ny ansatt lagt til i database" + newEmployeeRef.id);
        return newEmployeeRef;
    }catch(error){
        console.log("Feil ved lagring av ny ansatt (leggTilAnsatt)");
        console.log(error);
    }
}