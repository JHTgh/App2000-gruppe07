// listen over alle profiler
'use client';
import ListeElement from "./listeElement";

const ListeTilCompare = ({ profiler, handleProfilKlikk }) => {

  return (
    <ul>
      {profiler.map((profil) => (
        <ListeElement
          key={profil.id}
          profil={profil}
          handleProfilKlikk={handleProfilKlikk} />
      ))}
    </ul>
  );
};

export default ListeTilCompare;