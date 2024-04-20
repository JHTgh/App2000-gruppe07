'use client';
import { hentTestTilDatabase } from '@/app/api/big5/hentTestTilDatabase';
import { useEffect, useState } from 'react';
import { userUId } from '@/app/dashboard/layout';

export default function YourComponent() {
    const id = '661d0772609673000855729c';
    const ansID = 'tester123'
    const [data, setData] = useState(null);
    const [dataLagret, setDataLagret] = useState(false); // Flagger for å indikere om data er lagret
  
    useEffect(() => {
      async function fetchData() {
        if (!dataLagret) {
          console.log('henter data fra api');
            

          // scoredata blir sendt til database to ganger, men per nå blir denne dataen bare erstattet av seg selv 
          // TODO: fiks dette!
          const apiData = await hentTestTilDatabase(id, ansID);
          setData(apiData);
          setDataLagret(true); // Marker data som lagret
        }
      }
      fetchData();
    }, [id]);


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