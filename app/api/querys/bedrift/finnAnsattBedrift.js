import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '@/app/database/firebase';

export async function finnAnsatteBedrift(bedriftId) {
    const queryTilBedriftCollection = query(
        collection(db, 'ansatte'),
        where('CompanyId', '==', bedriftId)
    );
    return getDocs(queryTilBedriftCollection);
}