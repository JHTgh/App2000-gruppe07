// henter alle ansatte som er med i loggetinn sin bruker/bedrift

import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../../../firebase';

export async function hentAlleProfiler( uID ) {
    
    // lager query for å hente ut alle ansatte som har rikig bedrift id
    const queryTilProfilerCollection = query(
        collection(db, 'ansatte'),
        where('bedriftId', '==', uID)
    );

    const snapshot = await getDocs(queryTilProfilerCollection);

    if(snapshot.empty){
        console.log('bruker ikke funnet');
        return null;
    }
    // returnerer hele dokumenter for nå
    return snapshot;
}