import { useState, useEffect } from 'react';
import ListeTilCompare from '@/app/components/compare/listeTilCompare';
import ValgteProfilerListe from './valgteProfilerListe';
import { hentAlleProfiler } from '@/app/api/querys/profiler/hentAlleProfiler';
import { userUId } from '@/app/dashboard/layout';

const Sammenlign = () => {

    const [profiler, setProfiler] = useState([]);
    const [valgteProfiler, setValgteProfiler] = useState([]);
    const [navn, setNavn] = useState([]);

    // henter alle profiler som har riktig bedrift id
    useEffect(() => {
    const fetchData = async () => {
        const bedriftUId = await userUId;
        const data = await hentAlleProfiler(bedriftUId);
        // data blir returnert som et objekt men vi vil ha det i en array
        // vi vil også lagre bare navnene slik at lista ikke har for mye informasjon
        // bruker derfor en for løkke for å hente ut navnene
        const profilerArray = [];
        for (const profil in data.docs) {
            profilerArray.push(data.docs[profil].data().navn);
        }
        setProfiler(profilerArray);
        setNavn(profilerArray);

    };
    fetchData();
    }, []);

    const handleProfilKlikk = (profil) => {
    setValgteProfiler([...valgteProfiler, profil]);
    };

    return (
    <div>
        <h1>Profiler</h1>
        <ListeTilCompare profiler={profiler} handleProfilKlikk={handleProfilKlikk} />
        <h2>Valgte profiler</h2>
        <ValgteProfilerListe valgteProfiler={valgteProfiler} />
    </div>
    );
};
export default Sammenlign;