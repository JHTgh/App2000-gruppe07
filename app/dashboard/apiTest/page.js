'use client';
import { hentTestTilDatabase } from '@/app/api/big5/hentTestTilDatabase';
import { useEffect, useState } from 'react';
import { userUId } from '@/app/dashboard/layout';

export default function YourComponent() {

    // IKKE FERDIG

    const id = '661d0772609673000855729c';
    const [data, setData] = useState(null);

    useEffect( () => {
        // henter data fra api og venter på at dataen er på plass

        async function fetchData() {
        // henter testdata fra database
        if( !data ) {    
                console.log('henter data fra api')

                const uid = await userUId;
                const data = await hentTestTilDatabase(id, uid);
                setData(data);
            }
        }
        fetchData();
    }, [data]);


    if(!data) {
        return (
            <div>
                <h1>Api Test</h1>
                <p>Laster inn...</p>
            </div>
        )
    }

    return (
        <div>
            <h1>Api Test</h1>
            <p>suksess</p>
        </div>
    );
}