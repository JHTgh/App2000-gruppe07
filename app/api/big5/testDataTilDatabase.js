import { collection, addDoc } from "firebase/firestore";
import { db } from "../../database/firebase";


export async function testDataTilDatabase(data, uid) {

    const testResultCollection = collection (db, "testResults");

    // legger til uid i data samlingen
    const testResultsData = {
        ...data,
        uid
    };

    await addDoc(testResultCollection, testResultsData);
}