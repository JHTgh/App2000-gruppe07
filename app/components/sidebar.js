import Link from 'next/link';
import styles from './page.module.css';


function Sidebar() {
    return (
        <nav className={styles.sidebar}>
            <ul className={styles.links}>
                <li className={styles.navElement}>
                <Link href="/dashboard">Hjem?</Link>
                </li>
                <li className={styles.navElement}>
                <Link href="/dashboard/leggTil">Profiler?</Link>
                </li>
                <li className={styles.navElement}>
                <Link href="/dashboard">Lister?</Link>
                </li>
                <li className={styles.navElement}>
                <Link href="/dashboard">Sammenlign?</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar