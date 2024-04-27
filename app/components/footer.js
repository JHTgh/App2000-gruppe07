import Image from "next/image";
import Link from "next/link";
import facebook from "@/public/facebookLogo.png";
import twitter from "@/public/twitterLogo.png";
import github from "@/public/githubLogo.png";
import linkedin from "@/public/linkedinLogo.png";
import styles from "./page.module.css";

/*-- Laget av Jørgen og Markus --*/
const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <h1>SAY HALLO!</h1>
        <div className={styles.sosMed}>
          <ul>
            <li>
              <Link
                href="https://www.facebook.com/rubynorno/"
                className="facebookLogo"
              >
                <Image
                  src={facebook}
                  priority={true}
                  alt="facebook"
                  className={styles.images}
                ></Image>
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com/i/flow/login?redirect_after_login=%2Frubynor"
                className="twitterLogo"
              >
                <Image
                  src={twitter}
                  priority={true}
                  alt="twitter"
                  className={styles.images}
                ></Image>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/rubynor" className="githubLogo">
                <Image
                  src={github}
                  priority={true}
                  alt="github"
                  className={styles.images}
                ></Image>
              </Link>
            </li>
            <li>
              <Link
                href="https://no.linkedin.com/company/rubynor-as"
                className="linkedinLogo"
              >
                <Image
                  src={linkedin}
                  priority={true}
                  alt="linkedin"
                  className={styles.images}
                ></Image>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.infoFoot}>
          <p>Rubynor</p>
          <p>Bedriftsveien 64</p>
          <p>3735 Skien, Norway</p>
          <br></br>
          <p>bigfive-test@rubynor.com</p>
        </div>
        <div className="copyright">
          <p>© 2024 — Rubynor - all rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
