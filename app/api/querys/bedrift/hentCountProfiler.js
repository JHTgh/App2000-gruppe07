import { collection, query, where, getCountFromServer } from "firebase/firestore";
import { db } from "@/app/database/firebase";


/**
 * @author Nicco
 * @contributor Mie, Kjartan, CODEIUM
 * Henter antall ansatte i bedriften.
 * 
 * @param {string} bedriftID 
 * @returns {int} count - Antall ansatte i bedriften. eller 0 hvis ingen.
 */
export async function hentCount(bedriftID) {
    try {
        if (!bedriftID) {
            throw new Error('bedriftID is null');
        }

        const samling = collection(db, "ansatte");
        const tellerQuery = query(samling, where("CompanyId", "==", bedriftID));
        const snapshot = await getCountFromServer(tellerQuery);
        const antall = snapshot.data().count;
        console.log('snapshot', snapshot);

        if (!snapshot) {
            throw new Error('ingen ansatte funnet. countSnapshot is null');
        }

        console.log('antall', antall);
        return antall;
    } catch (error) {
        console.error('Error getting count: ', error);
        return 0;
    }
}