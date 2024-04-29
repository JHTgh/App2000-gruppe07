'use client';
import { useEffect, useState } from 'react';
import { userUId } from './layout';
import { hentBedriftNavn } from '../api/querys/bedrift/hentBedriftNavn';
import styles from "./page.module.css";
import { IoMdPersonAdd } from "react-icons/io";
import { FaRegRectangleList } from "react-icons/fa6";
import { TfiBarChart } from "react-icons/tfi";
import { hentCount } from '@/app/api/querys/bedrift/hentCountProfiler';

/*-- Kode skrevet av Marte-Marie Rønningen -- */
/**
 * @author Marte-Marie (Mie)
 * @Con Kjartan, CODEIUM
 * Dashboard page, den siden man kommer til når man er logget inn, viser hvor mange profiler innlogget bedrift har
 * @returns {JSX.Element} Dashboard
 */
export default function Dashboard() {
    const [bruker, setBruker] = useState(null);
    const [feil, setFeil] = useState(null);
    const [antProfiler, setAntProfiler] = useState(0);

    
    useEffect(() => {
        const hentBrukerData = async () => {
            try {
                const uId = await userUId; // Vente på IDen
                console.log('uID: (page) ' + uId);
                const brukerData = await hentBedriftNavn(uId);
                const countAnsatte = await hentCount(uId);
                setAntProfiler(countAnsatte);
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
            <div className={styles.mainDashboard}>
                <div className={styles.overskriftDashboard}>Velkommen, {bruker}</div>
                <div className={styles.opprett}>Du har opprettet</div>
                <div className={styles.flexContainer}>
                    <div className={styles.antallAnsatte}><p>{antProfiler} Profiler</p></div>
                 </div>  
                <IoMdPersonAdd className={styles.ikon} />
                <div className={styles.innholdDashboard}>
                    <p>
                        Legg til nye profiler i knappen <span className={styles.buttonDashboard}>Profiler</span><br/>
                        Husk å legg til testresultat ID når du oppretter profiler, <br />
                        for å oppnå full funksjonalitet av plattformen
                    </p>
                </div>
                <FaRegRectangleList className={styles.ikon} />
                <div className={styles.innholdDashboard}>
                    <p>
                    Se listen over profiler som er laget, <br />
                    og lag din egne lister i <span className={styles.buttonDashboard}>Lister</span>
                    </p>
                </div>
                <TfiBarChart className={styles.ikon} />
                <div className={styles.innholdDashboard}>
                    <p>
                    Sammenlign profilene du har laget <br />
                    i knappen <span className={styles.buttonDashboard}>Sammenlign</span>
                    </p>
                </div>
            </div>
    );
}

