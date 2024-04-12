import Link from 'next/link';
import styles from './page.module.css';


function Sidebar() {
    return (
        <nav className={styles.sidebar}>
            <ul className={styles.links}>
                <li className={styles.navElement}>
                <Link href="/dashbord2">Hjem?</Link>
                </li>
                <li className={styles.navElement}>
                <Link href="/dashbord2">Profiler?</Link>
                </li>
                <li className={styles.navElement}>
                <Link href="/dashbord2">Lister?</Link>
                </li>
                <li className={styles.navElement}>
                <Link href="/dashbord2">Sammenlign?</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar