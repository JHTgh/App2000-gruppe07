// en knapp som gjør valgtProfil tom - denne skal altid være synelig (ikke at vi koder det her)
import styles from './../page.module.css';

/**
 * @author Kjartan
 * @contributor Mie, Markus og CODEIUM (for JSDoc)
 * En knapp som gjør valgtProfil tom - samt skjematet 
 * Brukes til å toggle fra fremvisning av profil til å legge inn en ny profil
 * 
 * @param {function} setValgtProfil - funksjon for å kalle på setValgtProfil i ProfilerPage.js
 * @param {function} setFormData - funksjon for å kalle på setFormData i ProfilerPage.js
 * @returns {JSX.Element} - knapp komponent
 */
export default function LeggTilKnapp({ setValgtProfil, setFormData }) {

    const handleClick = () => {
        setValgtProfil(null);
        setFormData({
            navn: '',
            epost: '',
            adresse: '',
            postNr: '',
            stilling: '',
            testId: ''
        });
    };
    return (
        <button className={styles.oppdaterKnapp}
            onClick={handleClick}>
                Legg til en profil
        </button>
    );
}