// listen over alle profiler

import { useEffect } from "react";
import ListeElement from "./listeElement";
import { userUId } from '@/app/dashboard/layout';

const ListeTilCompare = ({ profiler, handleProfilKlikk }) => {
    const [profiler, setProfiler] = useState([]);

  const handleProfilKlikk = (profil) => {
    // Legg til logikk for å flytte profilen til den andre listen her
  };

    return (
        <ul>
        {profiler.map((profil) => (
            <li key={profil.id} onClick={() => handleProfilKlikk(profil)}>
                {profil.navn} - {profil.epost}
            </li>
        ))}
        </ul>
    );
};

export default ListeTilCompare;