// skal returnere bare ett element i en liste
'use client';
import { useState } from 'react';
import styles from './page.module.css';
import { LiaPlusSolid } from "react-icons/lia";
/*
export default function ListeElement( { profil, handleProfilKlikk, handleValgteProfilerKlikk , ikkeValgtProfiler} ) {

    const [selected, setSelected] = useState(false);
    

    const behandleEnProfilKlikk = (p) => {
        // Legg til logikk for å flytte profilen til den andre listen her
        if(!selected){
            handleProfilKlikk(p);
            console.log(p.navn + ' er valgt til sammenligning');
        }else{
            handleValgteProfilerKlikk(p);
            console.log(p.navn + ' er fjernet fra sammenligning');
        }
        // lager logikk for å selecte profilen
        setSelected(!selected);
    };
    
    // hvis denne profilen har blitt valgt vil vi heller returnere en skygget knapp som ikke har en trykke funksjon
    
    if(ikkeValgtProfiler.find(profil => profil.id === profil.id)) {
        return (
            <li 
            onClick={() => behandleEnProfilKlikk(profil)}
            className={styles.ikkeValgtElement}
            >
                {profil.navn}
        </li>
        )
    }else{
        <li
            onClick={() => behandleEnProfilKlikk(profil)}
            className={styles.valgtElement}>
                {profil.navn}
        </li>
    }
    
    
    
    
    /*
    if(selected) return (
        <li
            onClick={() => behandleEnProfilKlikk(profil)}
            className={styles.valgtElement}>
                {profil.navn}
        </li>
    );
    
    return (
        <li 
            onClick={() => behandleEnProfilKlikk(profil)}
            className={styles.ikkeValgtElement}
            >
                {profil.navn}
        </li>
    );
}*/


export default function ListeElement( { profil, handleProfilKlikk, handleValgteProfilerKlikk , erValgt} ) {
        const behandleKlikk = () => {
        // Legg til logikk for å flytte profilen til den andre listen her
        if(erValgt){
            handleValgteProfilerKlikk(profil);
            console.log(profil.navn + ' er fjernet fra sammenligning');
            
        }else{
            handleProfilKlikk(profil);
            console.log(profil.navn + ' er valgt til sammenligning');
        }
    };

    // hvis denne profilen har blitt valgt vil vi heller returnere en skygget knapp som ikke har en trykke funksjon
    
    if (erValgt) {
        return (
            <li
            onClick={behandleKlikk}
            className={styles.valgtElement}
          >
            {profil.navn} 
          </li>
        );
    }
    
    return (
        <li
          onClick={behandleKlikk}
          className={styles.ikkeValgtElement}
        >
          {profil.navn} <LiaPlusSolid className={styles.ikonLeggTil} />
        </li>
      );
}
