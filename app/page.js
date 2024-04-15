import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import Mann from "@/public/mann.jpg";
import Dame from "@/public/dame.jpg";
import Test from "@/public/testing.jpg";
import Gruppe from "@/public/gruppe.jpg";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.flexEn}>
      <div className={styles.flexVenstreEn}>
          <h1>Rekrutter Smartere: Velkommen Til BigFive!</h1>
          <p>
          BigFive er en plattform som tilbyr personlighetstesting 
          for bedrifter som ønsker å forbedre sin rekrutteringsprosess. 
          Ved å bruke vår tjeneste kan bedrifter få dyp innsikt i potensielle 
          ansattes personlighetsegenskaper
          </p>
          <p>Opprett en bedriftskonto her:</p>
          <ul>
            <li>
              <Link href="/profil">Opprett konto her</Link>
            </li>
          </ul>
        </div>
        <div className={styles.flexHøyreEn}>
        <Image
            src={Test}
            priority={true}
            alt="Test"
            className={styles.images}
          ></Image>
        </div> 
      </div>

      <div className={styles.flexTo}>
        <div className={styles.flexVenstreTo}>
        <Image
            src={Gruppe}
            priority={true}
            alt="Gruppe"
            className={styles.images}
          ></Image>
          <h2>BigFive Personlighetstest</h2>
        <p>Er du klar til å ta din rekrutteringsprosess til neste nivå?</p>
        <p>
          Velkommen til BigFives personlighetstest. Den ultimate løsningen 
          for bedrifter som ønsker å forme en mer effektiv og harmonisk arbeidsstyrke.
        </p>
        </div>
        <div className={styles.flexMidtTo}>
        <Image
            src={Mann}
            priority={true}
            alt="Mann"
            className={styles.images}
          ></Image> 
          <h2>Sammenlign ansatte eller arbeidssøkere ved rekrutering</h2>
          <p>
            Med vår avanserte personlighetstest får du en dyp og detaljert 
            innsikt i dine potensielle ansattes personlighetsegenskaper. 
          </p>
          <p>
            Fra åpenhet for erfaringer til nevrotisisme, vår test dekker alle 
            viktige aspekter og hjelper deg med å identifisere de beste kandidatene 
            for din bedriftskultur.
          </p>
        </div>
        <div className={styles.flexHøyreTo}>
          <Image
            src={Dame}
            priority={true}
            alt="Dame"
            className={styles.images}
          ></Image> 
          <h2>Registrer deg nå for å bygge et sterkere team!</h2>
          <p>
            Oppdag hvordan vår plattform kan styrke din rekrutteringsprosess og 
            hjelpe deg med å bygge et team som trives og lykkes sammen. 
          </p>
          <p>
            Registrer deg nå for å få tilgang til vårt kraftfulle verktøy og 
            ta det første skrittet mot å skape en sterkere og mer produktiv arbeidsstyrke!
          </p>
        </div>
      </div>
        <div className={styles.text}>
          <h2>Velg Smart!</h2>
          <p>
            BigFive tilbyr bedrifter en effektiv løsning 
            for å forbedre rekrutteringsprosessen. 
            Ved å bruke vår plattform kan bedrifter få innsikt i 
            kandidatenes personlighetsegenskaper, noe som hjelper 
            dem med å velge de rette kandidatene som passer godt 
            inn i deres arbeidsmiljø og bedriftskultur. 
          </p>
          <p>
            Vår personlighetstest gir bedrifter verktøyene de trenger 
            for å ta velinformerte beslutninger og bygge en sterkere 
            og mer produktiv arbeidsstyrke.
          </p>
        </div>
    </main>
  );
}
