'use client';
import { useState, useEffect } from 'react';
import ListeTilCompare from '@/app/components/compare/listeTilCompare';
import ValgteProfilerListe from '@/app/components/compare/valgteProfiler';
import { hentAlleProfiler } from '@/app/api/querys/profiler/hentAlleProfiler';
import { userUId } from '@/app/dashboard/layout';
import styles from "./page.module.css";
import CompareAll from '@/app/components/compare/compareAll';

const Sammenlign = () => {

    const [profiler, setProfiler] = useState([]);
    const [profilTeller, setProfilTeller] = useState(0);
    const [valgteProfiler, setValgteProfiler] = useState([]);
    const [ikkeValgtProfiler, setIkkeValgtProfiler] = useState([]);

    // henter alle profiler som har riktig bedrift id
    useEffect(() => {
    const fetchData = async () => {
        const bedriftUId = await userUId;
        console.log('bedriftUId: ' + bedriftUId);
        const data = await hentAlleProfiler(bedriftUId);

        console.log('data (Sammenlign)',data);
        // data blir returnert som et objekt men vi vil ha det i en array
        
        setProfiler(data);
        setProfilTeller(profilTeller + 1);
        setIkkeValgtProfiler(data);
    };
    fetchData();
    }, []);

    if (profiler === null || profiler.length === 0) {
        return (
            <div className={styles.flexcontainer}>
                <div className={styles.flexkomponent}>
                    {profiler === null ? (
                        <p>Du har ingen profiler.</p>
                    ) : (
                        <p>Laster inn...</p>
                    )}
                </div>
            </div>
        );
    }

    if( profiler[profilTeller] === undefined ) { 
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
        setIkkeValgtProfiler(ikkeValgtProfiler.filter((p) => p.id !== profil.id));
    };

    const handleValgteProfilerKlikk = (profil) => {
        setValgteProfiler(valgteProfiler.filter((p) => p.id !== profil.id));
        setIkkeValgtProfiler([...ikkeValgtProfiler, profil]);
    };

    return (
    <div className={styles.flexcontainer}>
        <div className={styles.sideListe}>
            <div className={styles.overskrift}>Profiler</div>
            <ListeTilCompare 
                profiler={profiler} 
                handleProfilKlikk={handleProfilKlikk} 
                handleValgteProfilerKlikk={handleValgteProfilerKlikk} 
                valgteProfiler={valgteProfiler}
                styles={styles.liste}
            />
        </div>
        <div className={styles.restenPanel}>
            <div className={styles.overskriftValgt}>Sammenlign</div>
            <ValgteProfilerListe valgteProfiler={valgteProfiler} handleValgteProfilerKlikk={handleValgteProfilerKlikk} />
            <CompareAll valgteProfiler={valgteProfiler} />
        </div>
    </div>
    );
};
export default Sammenlign;