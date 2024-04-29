import { db } from "../../../database/firebase";
import { doc, setDoc } from "firebase/firestore";

/**
 * @author Kjartan
 * Oppdater profil, all data er lovelig
 * bruker firestor sin metode for å oppdatere profil
 *
 * @param {Object} nyData - ny data for profil.
 * @param {string} id - id for profil.
 * @param {string} cId - id for company.
 * @return {boolean} - hvis oppdateringen er vellykket eller ikke
 */
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
        // gjør oss sikre på at testId (eventuell ny test) er i databasen.
        await hentTestTilDatabase(nyData.testId);

        return true;
    }catch(error){
        console.log(error);

        return false;
    }
}
