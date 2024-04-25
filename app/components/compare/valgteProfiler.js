'use client';
import React, { useState } from 'react';
import styles from './page.module.css';

const ValgteProfilerListe = ({ valgteProfiler, handleValgteProfilerKlikk }) => {

  const handleKlikk = (profil) => {
    handleValgteProfilerKlikk(profil);
    console.log(profil.navn + ' er valgt til sammenligning');
  };

  // dette er egentlig en boks som inneholder komponenter som er profiler (navn med en x knapp, til å ta de ut av lista)
  return (
    <div>
      {valgteProfiler.map((profil) => (
        <div 
          key={profil.id}
          className={styles.valgtKnapp}
          onClick={() => handleKlikk(profil)}>
          {profil.navn}
        </div>
      ))}
    </div>
  );
};

export default ValgteProfilerListe;