'use client';
import { useEffect, useState } from 'react';
import { queryBedriftNavn } from '@/app/api/querys/bedrift/queryBedrifNavn'; 
import { userUId } from './layout';
import { hentBedriftNavn } from '../api/querys/bedrift/hentBedriftNavn';
import styles from "./page.module.css";


export default function Dashboard() {
  const [bruker, setBruker] = useState(null);
  const [feil, setFeil] = useState(null);

  useEffect(() => {
    const hentBrukerData = async () => {
      try {
        const uId = await userUId(); // Vente på IDen
        console.log("uID: (page) " + uId);
        const brukerData = await hentBedriftNavn(uId);
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
            <p className={styles.content}>{bruker}</p>
            <div className={styles.flexContainer}>
                <div className={styles.flexBox}>
                    <h1 className={styles.antallAnsatte}>14</h1>
                    <p>Ansatte</p>
                </div>
  <             div className={styles.flexBox}><p>Hei på deg</p></div>
            </div>
            <p className={styles.innholdDashboard}>
            Legg til nye profiler i knappen<span className={styles.buttonDashboard}>Profiler</span><br/>
            Husk å legg til testresultat ID når du oppretter profiler, <br />
            for å oppnå full funksjonalitet av plattformen. <br />
            </p>
            <p className={styles.innholdDashboard}>
            Se listen over profiler som er laget, <br />
            og lag din egne lister i <span className={styles.buttonDashboard}>Lister</span> <br /> 
            </p>
            <p className={styles.innholdDashboard}>
            Sammenlign profilene du har laget <br />
            i knappen <span className={styles.buttonDashboard}>Sammenlign</span> <br />
            </p>
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
