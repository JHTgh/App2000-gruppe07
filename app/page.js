import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import sosial from "@/public/sosial.jpg";
import test from "@/public/test.jpg";
import statistikk from "@/public/statistikk.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.flexEn}>
        <div className={styles.flexVenstreEn}>
          <Image
            src={sosial}
            priority={true}
            alt="sosial"
            className={styles.images}
          ></Image>
        </div>
        <div className={styles.flexHøyreEn}>
          <h1>Big Five personlighetstest for bedrifter</h1>
          <p>Forstå dine kollegaer og eventuelle ansatte bedre ved hjelp av denne 
             open-source personlighetstesten
          </p>
          <p>Opprett en brukerkonto for din bedrift her:</p>
          <ul>
            <li><Link href="/profil">Opprett konto her</Link></li>
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
        </div>
        <div className={styles.flexHøyreTo}>
          <h1>Test deg selv</h1>
          <p>Her har du mulighet til å ta testen og teste deg selv 
             for å se om du er kompatilbel med jobben din
          </p>
          <p>test deg selv her:</p>
          <ul>
            <li><Link href="https://bigfive-test.com/no/test">Personlighetstest</Link></li>
          </ul>
        </div>
      </div>

      <div className={styles.flexTre}>
        <div className={styles.flexVenstreTre}>
          <Image
            src={statistikk}
            priority={true}
            alt="statistikk"
            className={styles.images}
          ></Image>
        </div>
        <div className={styles.flexHøyreTre}>
          <h1>Sammenlign ansatte eller arbeidssøkere ved rekrutering</h1>
          <p>Sammenlign deg med partneren din, kollegaer, venner eller familie</p>
          <p>Lær hvordan du skiller deg fra andre mennesker i de fem domenene: 
             Åpenhet for erfaringer, Planmessighet, Ekstroversjon, 
             Medmenneskelighet og Nevrotisisme</p>
        </div>
      </div>
    </main>
  );
}
