// henter alle ansatte som er med i loggetinn sin bruker/bedrift UTEN scoreData

import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '@/app/database/firebase';

/**
 * @author Kjartan
 * Veldig lik hentAlleProfiler, men målet med denne funksjonen er å hente alle profileren til bedriften.
 * Ikke score data, altså ikke ekstra data fra firestore.
 * Så funksjonen er til for å hente alle profiler som er linket med bedriftID
 * 
 * @param {string} bedriftID 
 * @returns {Array[object]} alle profilene til bedriften, null hvis ingen
 */
export async function hentProfilListe( bedriftID ) {
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
            const stilling = data.Stilling;
            const epost = data.Epost;
            const testId = data.TestId;
            const adresse = data.Adresse;
            const postNr = data.PostNr;

            return { id, navn, epost, testId, stilling, adresse, postNr };
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