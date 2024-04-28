import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../database/firebase";


export async function hentCount(bedriftID) {
    try {
        if (!bedriftID) {
            throw new Error('bedriftID is null');
        }

        const countQuery = query(
            collection(db, 'Ansatte'), 
              where('CompanyID', '==', bedriftID)
        );
        const countSnapshot = await getDocs(countQuery);
        console.log('countSnapshot', countSnapshot);

        if (!countSnapshot) {
            throw new Error('ingen ansatte funnet. countSnapshot is null');
        }

        const count = countSnapshot.size;
        console.log('count', count);
        return count;
    } catch (error) {
        console.error('Error getting count: ', error);
        return 0;
    }
}