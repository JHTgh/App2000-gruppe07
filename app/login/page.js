"use client";
import { useRouter } from "next/navigation";
import { handleLoginSubmit } from "../api/login/login";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";

/**
 * @author Jørgen, Kjartan og Markus
 * @con ChatGPT
 * Hjelpe metode for å sjekke om det bruker har tastet inn er kodkjent data
 * 
 * @param {object} formData - informasjon om innlogging
 * @returns {boolean} - om innlogging er vellykket eller ikke
 * @returns {string} - feilmelding hvis innlogging ikke er vellykket
 */
function validerData(formData) {
  const errors = [];
  if (!formData.email) {
    errors.push("Email is required");
  }
  if (!formData.password) {
    errors.push("Password is required");
  }
  return { isValid: errors.length === 0, errorMesg: errors };
}
/**
 * @author Jørgen, Kjartan og Markus
 * 
 * Siden tar imot inn data og kjører backend kode for å logge inn bedrift
 * 
 * @returns {JSX.Element} komponent for innlogging
 */
export default function Login() {
  const router = useRouter();
  const [suksess, setSuksess] = useState(false);
  const [inlogMessage, setInlogMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const [validation, setValidation] = useState({
    isValid: true,
    errorMessages: [],
  });

  const handleSubmit = async (event) => {
    console.log("logging in...");
    event.preventDefault();

    const validationResult = validerData(formData);
    console.log("inndata valideres");
    setValidation(validationResult);
    console.log(validationResult);
    if (validationResult.isValid) {
      console.log("inndata er gyldig - vendter på innlogging fra backend");
      // Prøver å logge inn bruker
      const svar = await handleLoginSubmit(formData);
      setSuksess(svar.suksess);
      setInlogMessage(svar.error);

      if (svar.suksess) {
        router.push("/dashboard");
      }
    }
  };

  return (
    <div className={styles.pageContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formContainer}>
          {suksess && (
            <div className={styles.successMessage}>
              Suksess! Du er logget inn.
            </div>
          )}
          <h1>Logg inn</h1>
          <input
            className={styles.textfieldEmail}
            type="email"
            placeholder="Epost"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            className={styles.textfieldPw}
            type="password"
            placeholder="Passord"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Link href="/" className={styles.link}>
            Glemt passord?
          </Link>
          <br />
          <div>
            <button type="submit" className={styles.loginBtn}>
              Logg inn
            </button>
            <p>
              Har du ikke brukerkonto?{" "}
              <Link href="/opprettbruker" className={styles.link}>
                Opprett bruker
              </Link>
            </p>
          </div>

          {inlogMessage !== "" || !validation.isValid ? (
            <div className={styles.errorMessage}>
              {inlogMessage}
              {validation.errorMesg}
            </div>
          ) : null}
        </div>
      </form>
    </div>
  );
}
