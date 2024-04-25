// skal returnere bare ett element i en liste
'use client';
import { useState } from 'react';
import styles from './page.module.css';

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
    return (
        <li
          onClick={behandleKlikk}
          className={erValgt ? styles.valgtElement : styles.ikkeValgtElement}
        >
          {profil.navn}
        </li>
      );
}
