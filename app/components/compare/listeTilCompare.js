// listen over alle profiler
'use client';
import ListeElement from "./listeElement";

const ListeTilCompare = ({ profiler, handleProfilKlikk,handleValgteProfilerKlikk, valgteProfiler }) => {
  return (
    <ul>
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