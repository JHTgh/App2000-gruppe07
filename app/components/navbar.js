"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/bigFive.png";
import styles from "./page.module.css";
import { auth } from "../database/firebase";
import { logoutSubmit } from "../api/logout/logout";
import { FaBars , FaTimes} from 'react-icons/fa';

import { useEffect, useState } from "react";

/*-- Laget Jørgen og Markus --*/
/**
 * @author Jørgen, Markus
 * @contributor Kjartan og Mie
 * Komponenten viser frem hovedmenyen til applikasjonen,  bruker kan navigerer på nettsiden med denne
 * Bruker en useState for å vise og skjule deler av hovedmenyen.
 * 
 * @returns {JSX.Element} Navbar komponent
 */
function Navbar() {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerOpen(!burgerOpen);
  };

  const[innloggetBruker, setInnloggetBruker] = useState(false)
  
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
    <div className={styles.nav}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} style={{ width: "100%" }} alt="Logo" />
        </Link>

        <ul className={styles.links}>
          <li className={styles.navElement}>
            <Link href="https://bigfive-test.com">Test</Link>{" "}
          </li>
          <>
          {innloggetBruker ? (

            <>
            <li className={styles.navElement}>
              <Link href="/dashboard">Profil</Link>
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
          <Link href="/login">Logg inn</Link></li>
          )}
          </>
        </ul>
      </nav>
      
    <nav className={`${styles.navburger} ${burgerOpen ? styles.open : ''}`}>
          <Link href="/" className={styles.logo}>
            <Image src={logo} style={{ width: "100%" }} alt="Logo" />
          </Link>
      <div className={styles.burgermenu}>
          <div className={styles.burgerIconClosed} onClick={toggleBurgerMenu}>
            {burgerOpen ? (
              <FaTimes className={styles.burgerIcon} />
            ) : (
              <FaBars className={styles.closeIcon} /> 
            )}
          </div>

        {burgerOpen && (
        <ul className={styles.burgerlinks}>
          <li className={styles.burgerElement}>
            <Link href="https://bigfive-test.com">Test</Link>{" "}
          </li>
          <>
          {innloggetBruker ? (
          <>
          <li className={styles.burgerElement}>
            <Link href="/dashboard">Profil</Link>
          </li>
          <li className={styles.burgerElement}>
            <Link onClick={logout} href="/">
              Logg ut
            </Link>
          </li>
          </>
          ) : (
          <li className={styles.burgerElement}>
            <Link href="/login">Logg inn</Link>
          </li>
          )}
          </>
          </ul>
          )}
      </div>
    </nav>
  </div>
  );
}

export default Navbar;
