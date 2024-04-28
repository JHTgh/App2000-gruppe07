// en knapp som gjør valgtProfil tom - denne skal altid være synelig (ikke at vi koder det her)
import styles from './../page.module.css';

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