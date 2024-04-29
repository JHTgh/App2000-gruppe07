// listen over alle profiler
'use client';
import ListeElement from "./listeElement";
import styles from './page.module.css';

/**
 * @author Kjartan
 * @contributor Mie, ChatGPT codeium (for JSDoc)
 * En liste komponent, lager liste og kjører en løkke med alle profiler i listen.
 * Sjekker om liste er tom, uten denne sjekken vil siden krasje, returnerer null hvis det ikke er en liste
 * Finner også ut om en gitt profil allerede er valg og dermer ender på variablen erValgt.
 *
 * @param {Array[object]} profiler - tabellen over alle profiler
 * @param {Function} handleProfilKlikk - en funksjon for å behandle ett klikk på en profil (fra compare/page.js)
 * @param {Function} handleValgteProfilerKlikk - en funksjon for å behandle klikk på valgte profiler (fra compare/page.js)
 * @param {Array[object]} valgteProfiler - en tabell over allerede valgte profiler
 * @return {JSX.Element} Liste komponent som representerer alle mulige profiler til sammenligning
 */
const ListeTilCompare = ({ profiler, handleProfilKlikk,handleValgteProfilerKlikk, valgteProfiler }) => {
  
  if(profiler === null || profiler.length === 0) {
    return null;
  }
  
  return (
    <ul className={styles.liste}>
      {profiler.map((profil) => {  
        const erValgt = valgteProfiler && valgteProfiler.includes(profil); 
        return (
          <ListeElement
            key={profil.id}
            profil={profil}
            handleProfilKlikk={handleProfilKlikk}
            handleValgteProfilerKlikk={handleValgteProfilerKlikk}
            erValgt={erValgt}
          />
        );
      })}
    </ul>
  );
};

export default ListeTilCompare;