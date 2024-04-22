'use client';
import React, { useState } from 'react';

const ValgteProfilerListe = ({ valgteProfiler }) => {


  // dette er egentlig en boks som inneholder komponenter som er profiler (navn med en x knapp, til å ta de ut av lista)
  return (
    <ul>
      {valgteProfiler.map((profil) => (
        <li key={profil.id}>
          {profil.navn} - {profil.epost}
        </li>
      ))}
    </ul>
  );
};

export default ValgteProfilerListe;