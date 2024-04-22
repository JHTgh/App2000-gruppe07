'use client';
import { useState, useEffect } from 'react';
import ListeTilCompare from '@/app/components/compare/listeTilCompare';
import ValgteProfilerListe from '@/app/components/compare/valgteProfiler';
import { hentAlleProfiler } from '@/app/api/querys/profiler/hentAlleProfiler';
import { userUId } from '@/app/dashboard/layout';
import styles from "./page.module.css";

const Sammenlign = () => {

    const [profiler, setProfiler] = useState([]);
    const [valgteProfiler, setValgteProfiler] = useState([]);
    const [navn, setNavn] = useState([]);

    // henter alle profiler som har riktig bedrift id
    useEffect(() => {
    const fetchData = async () => {
        const bedriftUId = await userUId;
        console.log(bedriftUId);
        const data = await hentAlleProfiler(bedriftUId);

        console.log(data);
        // data blir returnert som et objekt men vi vil ha det i en array
        
        setProfiler(data);

    };
    fetchData();
    }, []);

    if( profiler.length === 0 ) {
        return (
        <div className={styles.flexcontainer}>
            <div className={styles.flexkomponent}>
                <p>Laster inn...</p>
            </div>
        </div>
        );
    }

    const handleProfilKlikk = (profil) => {
    setValgteProfiler([...valgteProfiler, profil]);
    };

    return (
    <div className={styles.flexcontainer}>
        <div className={styles.flexkomponent}>
            <h1>Profiler</h1>
            <ListeTilCompare profiler={profiler} handleProfilKlikk={handleProfilKlikk} />
        </div>
        <div className={styles.flexkomponent}>
            <h1>Valgte profiler</h1>
            <ValgteProfilerListe valgteProfiler={valgteProfiler} />
        </div>
    </div>
    );
};
export default Sammenlign;