'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import { RxCross1 } from "react-icons/rx";


/**
 * @author Kjartan
 * @con Mie, Markus, ChatGPT og CODEIUM (for JSDoc)
 * Viser en liste over valgte profiler med en kryss-knapp for å fjerne dem.
 *
 * @param {Array[objekt]} valgteProfiler - En liste over valgte profiler.
 * @param {Function} handleValgteProfilerKlikk - En funksjon for å håndtere profilvalg.
 * @return {JSX.Element} Den rendrette listen over valgte profiler.
 */
const ValgteProfilerListe = ({ valgteProfiler, handleValgteProfilerKlikk }) => {

  const handleKlikk = (profil) => {
    handleValgteProfilerKlikk(profil);
    console.log(profil.navn + ' er valgt til sammenligning');
  };

  //legger til en x ved siden a navn, for å indikere at man kan trykke på den for å fjerne denne profilen
  return (
    <div>
      {valgteProfiler.map((profil) => (
        <div 
          key={profil.id}
          className={styles.valgtKnapp}
          onClick={() => handleKlikk(profil)}
          >
            {profil.navn} <RxCross1 className={styles.kryssUt}/>
        </div>
      ))}
    </div>
  );
};

export default ValgteProfilerListe;