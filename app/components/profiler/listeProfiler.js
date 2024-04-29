// viser frem liste over profiler
// hvis man trykker på ett element i lista skal dette elementet vises frem
// hvis bruker trykker på "legg til profil" skal ingen elementer vises frem, men heller form for å legge inn profil/ansatt

import styles from './component.module.css'

/**
 * @author Mie og Kjartan
 * @con ChatGPT og CODEIUM 
 * Komponent som viser en liste ovar alle profilene som er i tabellen
 * Funksjonaliteten i behandleTrykk gjør at informasjonen i formdata endres til den valgte profil
 * 
 * @param {array[object]} profiler - liste over alle profiler objekter
 * @param {function} setValgtProfil - funksjon for å sette profil som er valgt
 * @param {function} setFormData - funksjon for å sette all infor i FormData
 * @param {function} setVisFrem - funksjon for å sette visFrem
 * @returns 
 */
const ListeProfiler = ( {profiler, setValgtProfil, setFormData, setVisFrem} ) => {

    // hvis trykk skal profil bli valgt og det endrer på valgt profil
   function behandleTrykk(p){
    setValgtProfil(p)
    setFormData({
        navn: p.navn,
        epost: p.epost,
        adresse: p.adresse,
        postNr: p.postNr,
        stilling: p.stilling,
        testId: p.testId
    })
    setVisFrem(false);
   };
   if (!profiler || profiler.length === 0) return null;

    return (
    <ul className={styles.profilListe}>
        {profiler.map((profil) => {
        return (
            <li 
                key={profil.id}
                onClick={() => behandleTrykk(profil)}
                className={styles.profilListItem}
                >
                {profil.navn}
            </li>
        )
      })}
    </ul>
    )
};

export default ListeProfiler