// viser frem liste over profiler
// hvis man trykker på ett element i lista skal dette elementet vises frem
// hvis bruker trykker på "legg til profil" skal ingen elementer vises frem, men heller form for å legge inn profil/ansatt

import styles from './component.module.css'


const ListeProfiler = ( {profiler, setValgtProfil} ) => {

    // hvis trykk skal profil bli valgt og det endrer på valgt profil
   

    return (
    <ul className={styles.profilListe}>
        {profiler.map((profil) => {
        return (
            <li
                key={profil.id}
                onClick={() => setValgtProfil(profil)}
                className={styles.profilListItem}
                >
                {profil.navn} - {profil.epost}
            </li>
        )
      })}
    </ul>
    )
};

export default ListeProfiler