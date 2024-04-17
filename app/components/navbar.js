import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/bigFive.png";
import styles from "./page.module.css";
import { auth } from "../database/firebase";
import { logoutSubmit } from "../api/logout/logout";

function Navbar() {

  const[innloggetBruker, setInnloggetBruker] = useState(false);
  
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('bruker innlogget:');
        console.log(user);
        setInnloggetBruker(true);
      } else {
        console.log('ingen logget inn');
        setInnloggetBruker(false);
      }
    });
    return unsub;
  }, []);

  async function logout() {
    await logoutSubmit();
  }

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <Image src={logo} style={{ width: "100%" }} alt="Logo" />
      </Link>

      <ul className={styles.links}>
        <li className={styles.navElement}>
          <Link href="/arb3">Arbeidskrav3</Link>
        </li>
        <li className={styles.navElement}>
          <Link href="https://bigfive-test.com">Test</Link>{" "}
        </li>
        <li className={styles.navElement}>
          <Link href="/compare">Sammenlign</Link>
        </li>
        <>
          {innloggetBruker ? (
            <>
            <li className={styles.navElement}>
              <Link href="/dashbord2">Profil</Link>
            </li>
            <li className={styles.navElement}>
              <Link 
                onClick={logout} 
                href="/">
                  Logg ut
              </Link>
            </li>
            </>
          ) : (
            <li className={styles.navElement}>
              <Link 
                href="/login">
                  Logg inn
              </Link>
            </li>
          )}
          
        </>
      </ul>
    </nav>
  );
}

export default Navbar;
