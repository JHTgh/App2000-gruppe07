// denne siden skal ha en liste på venstre side og en måte å legge inn profiler/ansatte
// hvis man trykker på en profil skal test resulater fra api vises frem på midten samt info om profil(man kan også redigere eller slette denne profilen fra database)
// hvis man legger til en profil skal denne profilen dukke opp i liste, men ikke fra database (database blir oppdatert, men unødvendig å hente denne dataen fra databese)
"use client";
import { useEffect, useState } from "react";
import { hentProfilListe } from "@/app/api/querys/profiler/hentProfilListe";
import ProfilInfo from "@/app/components/profiler/profilInfo";
import ListeProfiler from "@/app/components/profiler/listeProfiler";
import { userUId } from '@/app/dashboard/layout';
import LeggTilKnapp from "@/app/components/profiler/leggTilKnapp";
import styles from "./page.module.css";
import LeggTilProfil from "@/app/components/profiler/leggTilProfil";


function ProfilerPage() {

    const [formData, setFormData] = useState({
        navn: '',
        epost: '',
        adresse: '',
        postNr: '',
        stilling: '',
        testId: ''
      });
    const [bedriftId, setBedriftId] = useState('');
    const [profiler, setProfiler] = useState([]);
    const [valgtProfil, setValgtProfil] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            const bedriftUId = await userUId;
            console.log('bedriftUId: ' + bedriftUId);
            const data = await hentProfilListe(bedriftUId);
    
            console.log('data (Sammenlign)',data);
            // data blir returnert som et objekt men vi vil ha det i en array
            setBedriftId(bedriftUId);
            setProfiler(data);
        };
        fetchData();
        }, []);

    
    const oppdaterListe = (profil) => {
        setProfiler([...profiler, profil]);
    }

    return (
        <div className={styles.flexcontainer}>
            <div className={styles.liste}>
                <ListeProfiler profiler={profiler} setValgtProfil={setValgtProfil} />
            </div>
            <div className={styles.content}>
                
                {valgtProfil !== null ? 
                    <>
                        <LeggTilKnapp setValgtProfil={setValgtProfil} />
                        <ProfilInfo profil={valgtProfil} />
                    </> : 
                    <>  
                        <LeggTilProfil formData={formData} setFormData={setFormData} bedriftId={bedriftId} oppdaterListe={oppdaterListe} />
                    </>
                }
            </div>
        </div>
    );
}


export default ProfilerPage;