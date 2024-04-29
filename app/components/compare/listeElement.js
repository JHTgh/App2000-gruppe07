// skal returnere bare ett element i en liste
'use client';
import { useState } from 'react';
import styles from './page.module.css';
import { LiaPlusSolid } from "react-icons/lia";

/**
 * @author Kjartan
 * @contributor Mie, ChatGPT, gemini, CODEIUM (for JSDoc)
 * Genererer ett liste element for en profil.
 * alle innparameterene er sendt som props fra listeTilCompare.js
 *
 * @param {Object} profil - en profil
 * @param {Function} handleProfilKlikk - funksjon for å kalle på handleProfilKlikk i compare/page.js
 * @param {Function} handleValgteProfilerKlikk - funksjon for å kalle på handleValgteProfilerKlikk i compare/page.js
 * @param {boolean} props.erValgt - forteller om denne profilen er valgt
 * @return {JSX.Element} selve listeelementet som en komponent
 */
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
