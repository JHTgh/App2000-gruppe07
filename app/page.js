import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import Gratis from "@/public/gratis.png";
import Vitenskaplig from "@/public/vitenskaplig.png";
import Test from "@/public/statistikk.png";
import Åpen from "@/public/åpen.png";

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
            src={Åpen}
            priority={true}
            alt="Åpen"
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
            src={Gratis}
            priority={true}
            alt="Gratis"
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
            src={Vitenskaplig}
            priority={true}
            alt="Vitenskaplig"
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
    </main>
  );
}
