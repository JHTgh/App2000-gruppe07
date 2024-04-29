import styles from './../page.module.css';

/**
 * @author Kjartan
 * @con Mie
 * En knapp som forteller at vi skal vise frem Big-5 test resulater i profiler/page.js
 * 
 * @param {function} setVisFrem - funksjon for å skjifte en boolean i Profiler/page.js
 * @returns {JSX.Element} knapp komponent
 */
export default function VisApiKnapp({setVisFrem}) {
    
    const behandleTrykk = () => {
        setVisFrem(true);
    }

    return (
        <button className={styles.oppdaterKnapp}
            onClick={behandleTrykk}
        >
            Vis Big-5 test resulater
        </button>
    );
}