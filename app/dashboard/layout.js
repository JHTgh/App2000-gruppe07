import { auth } from "../database/firebase";
import styles from "./page.module.css";
import Sidebar from "../components/sidebar";
import { getAuth, onAuthStateChanged } from "firebase/auth";


async function hentBrukerID() {

  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        resolve(uid);
      } else {
        resolve(null);
      }
    });
  });
}
export const userUId = hentBrukerID();

export default function Layout({ children }) {
  return (

    <div className={styles.flexSidebar}>
        <div className={styles.sidebar}>
            <Sidebar />
        </div>
        <div className={styles.content}>
            {children}
        </div>
    </div>

  );
}
