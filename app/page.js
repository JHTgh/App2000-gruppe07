import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import Dame from "@/public/dame.jpg";
import Folk from "@/public/folk.jpg";
import Team from "@/public/team.jpg";
import Velkommen from "@/public/velkommen.jpg";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.flexEn}>
      <div className={styles.flexVenstreEn}>
          <h1>Velkommen til BigFives Personlighetstest!</h1>
          <p>
          Ønsker du å styrke din bedrifts rekrutteringsprosess?
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
            src={Velkommen}
            priority={true}
            alt="Velkommen"
            className={styles.images}
          ></Image>
        </div> 
      </div>

      <div className={styles.flexTo}>
        <div className={styles.flexVenstreTo}>
        <Image
            src={Dame}
            priority={true}
            alt="Dame"
            className={styles.images}
          ></Image>
        </div>
        <div className={styles.flexMidtTo}>
        <Image
            src={Folk}
            priority={true}
            alt="Folk"
            className={styles.images}
          ></Image> 
        </div>
        <div className={styles.flexHøyreTo}>
        <Image
            src={Team}
            priority={true}
            alt="Team"
            className={styles.images}
          ></Image> 
        </div>
      </div>

      <div className={styles.flexTre}>
        <div className={styles.flexVenstreTre}>
        <h1>Test deg selv</h1>
        <p>
        Vår plattform er skapt for å gi bedrifter 
        som din en grundig forståelse av kandidatenes 
        personlighetsegenskaper, noe som gjør det enklere 
        å ta velinformerte beslutninger i rekrutteringsprosessen.
        </p>
        </div>
        <div className={styles.flexMidtTre}>
          <p>hei</p>
        </div>
        <div className={styles.flexHøyreTre}>
          <h1>Sammenlign ansatte eller arbeidssøkere ved rekrutering</h1>
          <p>
            Sammenlign deg med partneren din, kollegaer, venner eller familie
          </p>
          <p>
            Lær hvordan du skiller deg fra andre mennesker i de fem domenene:
            Åpenhet for erfaringer, Planmessighet, Ekstroversjon,
            Medmenneskelighet og Nevrotisisme
          </p>
        </div>
      </div>
    </main>
  );
}
