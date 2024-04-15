import { hentTestData } from "./hentTestData";
import { testDataTilDatabase } from "./testDataTilDatabase";

export async function hentTestTilDatabase(id, ansattID) {
    // er ikke uid vi skal ha, vi skal ha ansattID
    let apiData;
    
    try{
        // henter all info fra api
        apiData = await hentTestData(id);
        console.log('data hentet fra api');
        console.log('apiData', apiData);
    }catch(error){
        console.error(error);
    }

    // sender det inn til databasen
    try{
        await testDataTilDatabase(apiData, ansattID);
        console.log('Data sendt inn til database');
    } catch(error){
        console.error(error);
    }
}