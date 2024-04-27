// henter alle ansatte som er med i loggetinn sin bruker/bedrift

import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '@/app/database/firebase';
import { hentScoreData } from '../testRes/hentScoreData';

export async function hentAlleProfiler( uID ) {
    // lager query for å hente ut alle ansatte som har rikig bedrift id
    const queryTilProfilerCollection = query(
        collection(db, 'ansatte'),
        where('companyId', '==', uID)
    );
    
    try {
        const snapshot = await getDocs(queryTilProfilerCollection);

        // Henter alle objekter fra queryen og omformulerer dem til ønsket format
        const alleProfiler = await Promise.all(
        snapshot.docs.map(async (doc) => {
            const id = doc.id;
            const data = doc.data();
            const navn = data.Navn;
            const epost = data.Epost;
            const testId = data.testId;

            // Henter score istedenfor å returnere testID
            const scoreData = await hentScoreData(testId);
            console.log('scoreData (alleProfiler) ', scoreData);

            return { id, navn, epost, scoreData };
        })
        );

        console.log('alleProfiler (hentAlleProfiler): ', alleProfiler);

        if (snapshot.empty) {
        console.log('Profil ikke funnet (hentAlleProfiler)');
        return null;
        }

        // Returnerer alle profiler som et Promise
        return alleProfiler;
    } catch (error) {
        console.error('Feil ved henting av profiler:', error);
        return null;
    }
}