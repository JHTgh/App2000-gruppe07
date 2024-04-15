'use client';
import { useEffect, useState } from 'react';
import { queryBedriftNavn } from '@/app/api/querys/bedrift/queryBedrifNavn'; 
import { userUId } from './layout';


export default function Dashboard() {
    const [bruker, setBruker] = useState(null);
    const [feil, setFeil] = useState(null);

    
    useEffect(() => {
        const hentBrukerData = async () => {
            try {
                const uId = await userUId; // Vente på IDen
                console.log('uID: (page) ' + uId);
                const brukerData = await queryBedriftNavn(uId);
                setBruker(brukerData);
            } catch (error) {
                setFeil(error); // Håndter feil
                console.error(error);
            }
        };
    
        hentBrukerData();
    }, []);



    if (!bruker && !feil) {
        return (
            <div>
                <h1>Velkommen</h1>
                <p>Laster inn...</p>
            </div>
        );
    }

    if (feil) {
        return (
            <div>
                <h1>Feil</h1>
                <p>{feil.message}</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Velkommen</h1>
            <p>{bruker}</p>
        </div>
    );
}

