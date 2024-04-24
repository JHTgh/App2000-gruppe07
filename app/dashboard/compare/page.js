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
    const [selected, setSelected] = useState([]);

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
        for(let i = 0; i < data.length; i++) {
            setSelected(i, false);
        }
    };
    fetchData();
    }, []);

    if( profiler === null  ) {
        return (
        <div className={styles.flexcontainer}>
            <div className={styles.flexkomponent}>
                <p>Du har ingen profiler.</p>
            </div>
        </div>
        );
    }

    if( profiler.length === 0  ) {
        return (
        <div className={styles.flexcontainer}>
            <div className={styles.flexkomponent}>
                <p>Laster inn...</p>
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
            <h1>Profiler</h1>
            <ListeTilCompare 
                profiler={profiler} 
                handleProfilKlikk={handleProfilKlikk} 
                handleValgteProfilerKlikk={handleValgteProfilerKlikk} 
                selected={selected} 
                setSelected={setSelected}
            />
        </div>
        <div className={styles.restenPanel}>
            <h1>Valgte profiler</h1>
            <ValgteProfilerListe valgteProfiler={valgteProfiler} handleValgteProfilerKlikk={handleValgteProfilerKlikk} />
            <CompareAll valgteProfiler={valgteProfiler} />
        </div>
    </div>
    );
};
export default Sammenlign;