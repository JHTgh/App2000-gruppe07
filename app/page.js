import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { firebaseConfig } from "@/app/database/firebase";
import chartto from "@/public/chartto.png";
import personlighetstest from "@/public/personlighetstest.png";
import workplace from "@/public/workplace.png";


/**
 * @auther Jørgen, Markus og Mie
 * Landings siden, viser oversikt over hva nettsiden er for.
 * 
 * 
 * @returns {JSX.Element} - Landings siden 
 */

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.flexEn}>
        <div className={styles.flexVenstreEn}>
          <p>
            Få oversikt over dine ansattes og jobbsøkeres open-source <br /> personlighetstest resultater. <br />
          </p>
          <ul>
            <li>
              <Link className = {styles.link} href="/opprettbruker">Opprett konto</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.flexTo}>
        <div className={styles.flexVenstreTo}>
          <Image
            src={personlighetstest}
            priority={true}
            alt="personlighetstest"
            className={styles.images}
          ></Image>
          <h2>BigFive personlighetstest</h2>
            <p>
            La dine ansatte og jobbsøkere <br />
            ta en personlighetstest, <br />
            og få oversikt av resultatene her.
            </p>
        </div>
        <div className={styles.flexMidtTo}>
        <Image
            src={workplace}
            priority={true}
            alt="workplace"
            className={styles.images}
          ></Image>
          <h2>Registrer deg nå!</h2>
          <p>
            Og oppdag hvordan vår plattform kan styrke din rekrutteringsprosess og
            hjelpe deg med å bygge et team som trives og lykkes sammen.
          </p>
        </div>
        <div className={styles.flexHøyreTo}>
        <Image
            src={chartto}
            priority={true}
            alt="chartto"
            className={styles.images}
          ></Image>
          <h2>Sammenlign resultatene</h2>
          <p>
            I plattformen kan du enkelt sammenligne resultatene fra testen for dine ansatte og jobbsøkere. 
          </p>
        </div>
      </div>
    </main>
  );
}
