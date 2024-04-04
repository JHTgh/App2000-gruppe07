import Link from "next/link";
import Image from "next/image";
import logo from "@/public/bigFive.png";
import styles from "../styles.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <Image src={logo} style={{ width: "100%" }} alt="Logo" />
      </Link>

      <ul className={styles.links}>
        <li className={styles.navElement}>
          <Link href="https://bigfive-test.com/no/test">Test</Link>{" "}
        </li>

        <li className={styles.navElement}>
          <Link href="/profil">Logg inn</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
