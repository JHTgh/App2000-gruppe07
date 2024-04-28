// henter alle ansatte som er med i loggetinn sin bruker/bedrift

import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '@/app/database/firebase';
import { hentScoreData } from '../testRes/hentScoreData';

/**
 * @author Kjartan
 * @contributor ChatGPT
 * Henter alle profilene til bedriften.
 * Bruker hentScoreData for å hente test resulater til gitt profil
 * 
 * @param {string} bedriftID 
 * @returns {Array[object]} alle profilene til bedriften, null hvis ingen
 */
export async function hentAlleProfiler( bedriftID ) {
    // lager query for å hente ut alle ansatte som har rikig bedrift id
    const queryTilProfilerCollection = query(
        collection(db, 'ansatte'),
        where('CompanyId', '==', bedriftID)
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
            const testId = data.TestId;

            // Henter score istedenfor å returnere testID
            const scoreData = await hentScoreData(testId);

            return { id, navn, epost, scoreData };
        })
        );

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