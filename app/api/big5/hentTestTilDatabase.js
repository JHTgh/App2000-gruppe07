import { hentTestData } from "./hentTestData";
import { testDataTilDatabase } from "./testDataTilDatabase";

export async function hentTestTilDatabase(id, uid) {
    // er ikke uid vi skal ha, vi skal ha ansattID
    let apiData;
    
    try{
        // henter all info fra api
        apiData = hentTestData(id);
        console.log('data hentet fra api');
    }catch(error){
        console.error(error);
    }

    // sender det inn til databasen
    try{
        testDataTilDatabase(apiData, uid);
        console.log('Data sendt inn til database');
        return apiData;
    } catch(error){
        console.error(error);
        return null;
    }
}