// listen over alle profiler
'use client';
import ListeElement from "./listeElement";
import styles from './page.module.css';

const ListeTilCompare = ({ profiler, handleProfilKlikk,handleValgteProfilerKlikk, valgteProfiler }) => {
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