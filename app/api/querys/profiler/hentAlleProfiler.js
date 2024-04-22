// henter alle ansatte som er med i loggetinn sin bruker/bedrift

import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '@/app/database/firebase';
import { hentScoreData } from './hentScoreData';

export async function hentAlleProfiler( uID ) {
    // lager query for å hente ut alle ansatte som har rikig bedrift id
    const queryTilProfilerCollection = query(
        collection(db, 'ansatte'),
        where('companyId', '==', uID)
    );
    const snapshot = await getDocs(queryTilProfilerCollection);

    // vi vil ha alle objektene queryen finner, men vi vil omformulere alle elementene til det formatet vi vil ha 
    const alleProfiler = snapshot.docs.map(async doc => {
        const id = doc.id;
        const data = doc.data();
        const navn = data.Navn; 
        const epost = data.Epost; 
        const testId = data.testId; 
        // nå som har riktig test henter vi score istedenfor å returnere testID
        const scoreData = await hentScoreData(testId);
        console.log('scoreData (alleProfiler) ', scoreData);
        return { id, navn, epost, scoreData };
      });

    console.log('alleProfiler (hentAlleProfiler): ', alleProfiler);
    if(snapshot.empty){
        console.log('profil ikke funnet (hentAlleProfiler)');
        return null;
    }
    // returnerer hele dokumenter for nå
    return alleProfiler;
}