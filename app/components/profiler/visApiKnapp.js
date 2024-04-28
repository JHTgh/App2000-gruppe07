import styles from './../page.module.css';

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