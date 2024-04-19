import { hentTestData } from "./hentTestData";
import { testDataTilDatabase } from "./testDataTilDatabase";

export async function hentTestTilDatabase(id, ansattID) {
    // er ikke uid vi skal ha, vi skal ha ansattID

    const apiData = await hentTestData(id);
    console.log('data hentet fra api');

    if (apiData) {
        await testDataTilDatabase(apiData, ansattID);
        console.log('Data sendt inn til database');

        return true;
    }else{
        console.log('Feil ved henting av data');
        return false;
    }
}