import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import Mann from "@/public/mann.jpg";
import Dame from "@/public/dame.jpg";
import Test from "@/public/testing.jpg";
import Gruppe from "@/public/gruppe.jpg";
import TestPersoner from "@/public/TestPersoner.png";
import { firebaseConfig } from "@/app/database/firebase";
import UserChart from "@/public/userChart.png";
import chartto from "@/public/chartto.png";
import test from "@/public/test.png";
import mote from "@/public/mote.png";
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
            src={test}
            priority={true}
            alt="test"
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
            src={mote}
            priority={true}
            alt="mote"
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

/*     <div className={styles.flexHøyreEn}>
<Image
src={Test}
priority={true}
alt="Test"
className={styles.images}
></Image> 
</div> */