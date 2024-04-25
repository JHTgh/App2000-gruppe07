// denne siden skal ha en liste på venstre side og en måte å legge inn profiler/ansatte
// hvis man trykker på en profil skal test resulater fra api vises frem på midten samt info om profil(man kan også redigere eller slette denne profilen fra database)
// hvis man legger til en profil skal denne profilen dukke opp i liste, men ikke fra database (database blir oppdatert, men unødvendig å hente denne dataen fra databese)
"use client";
import { useEffect, useState } from "react";
import { hentAlleProfiler } from "@/app/api/querys/profiler/hentAlleProfiler";
import ProfilInfo from "@/app/components/profiler/profilInfo";
import ListeProfiler from "@/app/components/profiler/listeProfiler";
import { userUId } from '@/app/dashboard/layout';
import { Content } from "next/font/google";
import LeggTilKnapp from "@/app/components/profiler/leggTilKnapp";
import styles from "./page.module.css";


function ProfilerPage() {

    const [profiler, setProfiler] = useState([]);
    const [valgtProfil, setValgtProfil] = useState({});
    
    useEffect(() => {
        const fetchData = async () => {
            const bedriftUId = await userUId;
            console.log('bedriftUId: ' + bedriftUId);
            const data = await hentAlleProfiler(bedriftUId);
    
            console.log('data (Sammenlign)',data);
            // data blir returnert som et objekt men vi vil ha det i en array
            
            setProfiler(data);
        };
        fetchData();
        }, []);
        


    return (
        <div className={styles.flexcontainer}>
            <div className={styles.liste}>
                <ListeProfiler profiler={profiler} setValgtProfil={setValgtProfil} />
            </div>
            <div className={styles.content}>
                <LeggTilKnapp setValgtProfil={setValgtProfil} />
                {valgtProfil !== null ? 
                    <ProfilInfo profil={valgtProfil} /> : 
                    <h1>Velg profil</h1>
                }
            </div>
        </div>
    );
}


export default ProfilerPage;