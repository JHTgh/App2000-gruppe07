'use client';
import { useEffect, useState } from 'react';
import { queryBedriftNavn } from '@/app/api/querys/bedrift/queryBedrifNavn'; 
import { userUId } from './layout';
import { hentBedriftNavn } from '../api/querys/bedrift/hentBedriftNavn';
import styles from "./page.module.css";
import { IoMdPersonAdd } from "react-icons/io";
import { FaRegRectangleList } from "react-icons/fa6";
import { TfiBarChart } from "react-icons/tfi";
import { hentCount } from '@/app/api/querys/bedrift/hentCountProfiler';

/*-- Kode skrevet av Marte-Marie Rønningen -- */
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
        <div>
            <div className={styles.overskriftDashboard}>Velkommen,<span className={styles.content}>{bruker}</span></div>
            <div className={styles.flexContainer}> <span className={styles.underskriftDashboard}> Du har opprettet </span></div>
            <div className={styles.flexContainer}>
                <div className={styles.flexBox}>
                    <div className={styles.antallAnsatte}>{antProfiler}</div>
                    <p>Profiler</p>
                </div>
            </div>    
            <span><IoMdPersonAdd className={styles.ikon} /></span>
            <p className={styles.innholdDashboard}>
            
            Legg til nye profiler i knappen<span className={styles.buttonDashboard}>Profiler</span><br/>
            Husk å legg til testresultat ID når du oppretter profiler, <br />
            for å oppnå full funksjonalitet av plattformen <br />
            </p>
            <span><FaRegRectangleList className={styles.ikon} /></span>
            <p className={styles.innholdDashboard}>
            Se listen over profiler som er laget, <br />
            og lag din egne lister i <span className={styles.buttonDashboard}>Lister</span> <br /> 
            </p>
            <span><TfiBarChart className={styles.ikon} /></span>
            <p className={styles.innholdDashboard}>
            Sammenlign profilene du har laget <br />
            i knappen <span className={styles.buttonDashboard}>Sammenlign</span> <br />
            </p>
        </div>
    );
}

