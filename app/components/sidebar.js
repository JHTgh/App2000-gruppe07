import Link from 'next/link';
import styles from '../dashboard/page.module.css';
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaRegListAlt } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { BsBarChartFill } from "react-icons/bs";

/**
 * @author Markus og Jørgen 
 * @con Mie
 * Egen komponent for visning av sidebar, bruker kan navigerer på nettsiden med denne
 * 
 * @returns {JSX.Element} Sidebar komponent
 */
function Sidebar() {
    return (

        <div className={styles.sidebar}>
            <nav className={styles.sidenav}>
                <ul className={styles.links}>
                    <li className={styles.navElement}>
                    <Link href="/dashboard"><FaHome /> Hjem</Link>
                    </li>
                    <li className={styles.navElement}>
                    <Link href="/dashboard/profiler"><CgProfile /> Profiler</Link>
                    </li>
                    <li className={styles.navElement}>
                    <Link href="/dashboard/"><FaRegListAlt /> Lister</Link>
                    </li>
                    <li className={styles.navElement}>
                    <Link href="/dashboard/compare"><BsBarChartFill /> Sammenlign</Link>
                    </li>
                </ul>
            </nav>
        </div>

    );
}

export default Sidebar