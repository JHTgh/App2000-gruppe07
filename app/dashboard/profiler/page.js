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
import VisApiKnapp from "@/app/components/profiler/visApiKnapp";
import ApiData from "@/app/components/profiler/dataFraApi";

/**
 * @author Kjartan og Mie
 * @con Markus, codeium
 * 
 * Profiler page bruker flere egne komponenter. har også flere funksjoner som brukes til de forskjene komponentene.
 * 
 * @returns {JSX.Element} Profiler page
 */
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
    const [visFrem, setVisFrem] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
            const bedriftUId = await userUId;
            console.log('bedriftUId: ' + bedriftUId);
            const data = await hentProfilListe(bedriftUId);
    
            console.log('data (Sammenlign)',data);
            // data blir returnert som et objekt men vi vil ha det i en array
            setBedriftId(bedriftUId);
            if (data === null) {
                setProfiler([]);
            }else{
                setProfiler(data);
            }
        };
        fetchData();
        }, []);

    
    const oppdaterListe = (profil) => {
        // hvis profiler er tom, må vi håndtere dette siden [...profiler] ikke er lovelig kode hvis den er tom
        if (profiler.length === 0) {
            //legger inn "første" profil i listen
            setProfiler([profil]);
        }
        // utvider profillisten
        setProfiler([...profiler, profil]);
    }
    const oppdaterSlett = (profil) => {
        //fjerner profil som blir slettet fra listen, sammenligener på id som alltid er unik
        setProfiler(profiler.filter(p => p.id !== profil.id));
    }
    const oppdaterUpdate = (oppdatertProfil) => {
        // oppdaterer profil i listen, sammenligende på id igjen
        setProfiler(profiler.map(p => p.id === oppdatertProfil.id ? oppdatertProfil : p));
    }

    return (
        <div className={styles.flexcontainer}>
            <div className={styles.liste}>
                <ListeProfiler 
                    profiler={profiler} 
                    setValgtProfil={setValgtProfil} 
                    setFormData={setFormData}
                    setVisFrem={setVisFrem}
                />
            </div>
            <div className={styles.content}>
                
                {valgtProfil !== null ? 
                    <>
                        <LeggTilKnapp 
                            setValgtProfil={setValgtProfil} 
                            setFormData={setFormData} 
                        />
                        <ProfilInfo 
                            profil={valgtProfil} 
                            formData={formData} 
                            setFormData={setFormData} 
                            oppdaterSlett={oppdaterSlett} 
                            oppdaterUpdate={oppdaterUpdate}
                        />
                        {visFrem ? 
                            <ApiData 
                                id={valgtProfil.testId}
                                navn={valgtProfil.navn}
                            /> : 
                            <VisApiKnapp 
                                setVisFrem={setVisFrem} 
                            />
                        }
                    </> : 
                    <>  
                        <LeggTilProfil 
                            formData={formData} 
                            setFormData={setFormData} 
                            bedriftId={bedriftId} 
                            oppdaterListe={oppdaterListe} 
                        />
                    </>
                }
            </div>
        </div>
    );
}


export default ProfilerPage;