import Link from 'next/link';
import styles from '../dashbord2/page.module.css';
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaRegListAlt } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <nav className={styles.sidenav}>
                <ul className={styles.links}>
                    <li className={styles.navElement}>
                    <Link href="/dashbord2"><FaHome /> Hjem</Link>
                    </li>
                    <li className={styles.navElement}>
                    <Link href="/dashbord2"><CgProfile /> Profiler</Link>
                    </li>
                    <li className={styles.navElement}>
                    <Link href="/dashbord2"><FaRegListAlt /> Lister</Link>
                    </li>
                    <li className={styles.navElement}>
                    <Link href="/dashbord2"><FaCodeCompare /> Sammenlign</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar