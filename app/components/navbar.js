"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/bigFive.png";
import styles from "./page.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <Image src={logo} style={{ width: "100%" }} alt="Logo" />
      </Link>

      <ul className={styles.links}>
      <li className={styles.navElement}>
          <Link href="/arb3">Arbeidskrav3</Link>{" "}
        </li>
        <li className={styles.navElement}>
          <Link href="https://bigfive-test.com">Test</Link>{" "}
        </li>
        <li className={styles.navElement}>
          <Link href="/about">Om oss</Link>
        </li>
        <>
          <li className={styles.navElement}>
            <Link href="/profil">Profil</Link>
          </li>
        </>
        <>
          <li className={styles.navElement}>
            <Link href="/login">Logg inn</Link>
          </li>
        </>
      </ul>
    </nav>
  );
}

export default Navbar;
