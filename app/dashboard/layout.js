import { auth } from "../database/firebase";
import styles from "./page.module.css";
import Sidebar from "../components/sidebar";
import { getAuth, onAuthStateChanged } from "firebase/auth";

/**
 * @author Kjartan
 * Hjelpe metode for å hente innlogget id, vist seg at dette ikke er en god løsning men den blir siden vi løper ut med tid
 * 
 * @returns {string} id for innlogget bruker
 */
async function hentBrukerID() {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("uid (layout): " + uid);
        resolve(uid);
      } else {
        resolve(null);
      }
    });
  });
}
export const userUId = hentBrukerID();

/**
 * @author Jørgen
 * 
 * 
 * @param {children} children - alle sider som skal vises
 * @returns {JSX.Element} - returnerer children med flex og sidebar som en komponent
 */
export default function Layout({ children }) {
  return (
    <div className={styles.flexSidebar}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
