import { collection, addDoc } from "firebase/firestore";
import { db } from "../../database/firebase";


export async function testDataTilDatabase(data, ansID) {

    const testResultCollection = collection (db, "testResults");

    console.log(data);

    // legger til uid i data samlingen
    const testResultsData = {
        ...data,
        ansattID: ansID
    };

    await addDoc(testResultCollection, testResultsData);
}