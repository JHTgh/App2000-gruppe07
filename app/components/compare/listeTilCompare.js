// listen over alle profiler
'use client';
import ListeElement from "./listeElement";

const ListeTilCompare = ({ profiler, handleProfilKlikk,handleValgteProfilerKlikk, selected, setSelected }) => {


  for (let i = 0; i < profiler.length; i++) {
    console.log(profiler[i].navn + ' ' + selected[i]);
  }

  console.log(selected);

  return (
    <ul>
      {profiler.map((profil, index) => (
        <ListeElement
          key={profil.id}
          profil={profil}
          handleProfilKlikk={handleProfilKlikk}
          handleValgteProfilerKlikk={handleValgteProfilerKlikk}
          selected={selected[index]} 
          setSelected={setSelected}
          index={index}
          />
      ))}
    </ul>
  );
};

export default ListeTilCompare;