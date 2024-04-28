import { hentTestData } from "./hentTestData";
import { testDataTilDatabase } from "./testDataTilDatabase";

/**
 * @author Kjartan
 * @contributor CODEIUM (for JSDoc)
 * En hjelpe funksjon for å slippe å kalle på to funksjoner i frontend.
 * Returnerer en boolean, der true betyr at vi klarte å behandle dataen riktig
 *
 * @param {string} id - ID for test.
 * @return {boolean} Returnerer en boolean.
 */

export async function hentTestTilDatabase(id) {
    // er ikke uid vi skal ha, vi skal ha ansattID

    const apiData = await hentTestData(id);
    console.log('data hentet fra api');

    if (apiData) {
        await testDataTilDatabase(apiData, id);
        console.log('Data sendt inn til database');

        return true;
    }else{
        console.log('Feil ved henting av data');
        return false;
    }
}