'use client';
import { hentTestTilDatabase } from '@/app/api/big5/hentTestTilDatabase';
import { useEffect, useState } from 'react';
import { userUId } from '../layout';

export default function YourComponent() {

    const id = '58a70606a835c400c8b38e84';
    const [data, setData] = useState(null);

    useEffect( () => {
        // henter data fra api og venter på at dataen er på plass
        async function fetchData() {
            // henter testdata fra database
            console.log('henter data fra api')
            const data = await hentTestTilDatabase(id, userUId);
         
            setData(data);
        }
        fetchData();
    }, []);


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
            <p>{data.nevrotisisme.score}</p>
        </div>
    );
}