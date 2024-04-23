"use client";
import { useState } from "react";
import { handleRegSubmit } from "../api/signup/signup";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import workplace from "@/public/workplace.png";
import Image from "next/image";

function validateInput(data) {
  const errors = [];
  if (!data.bedriftNavn) {
    errors.push("Bedriftsnavn er påkrevd");
  }
  // Add email validation using a regular expression
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push("Ugyldig e-postadresse");
  }
  // Passordvalidering
  if (data.password.length < 6) {
    errors.push("Passordet må være minst 6 tegn");
  }
  if (!/[a-z]/i.test(data.password)) {
    errors.push("Passordet må inneholde minst én bokstav");
  }
  if (!/[0-9]/i.test(data.password)) {
    errors.push("Passordet må inneholde minst ett tall");
  }
  return { isValid: errors.length === 0, errorMessages: errors };
}

export default function Signup() {
  const [suksess, setSuksess] = useState(false);
  const [formData, setFormData] = useState({
    bedriftNavn: "",
    email: "",
    password: "",
  });
  const [validation, setValidation] = useState({
    isValid: true,
    errorMessages: [],
  });
  const naviger = useRouter();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationResult = validateInput(formData);
    setValidation(validationResult);
    if (validationResult.isValid) {
      // Prøver å registrere bruker
      const svar = await handleRegSubmit(formData);
      setSuksess(svar.suksess);

      if (svar.suksess) {
        naviger.push("/dashboard");
      }
    }
  };

  return (
      <div className={styles.pageContainer}>

      <form className={styles.form} onSubmit={handleSubmit}>
        {suksess && (
          <div className={styles.successMessage}>
            Suksess! Profilen din er opprettet.
          </div>
        )}
        <div className={styles.formContainer}>
          <h1>Opprett bedriftskonto</h1>

          <input
            type="text"
            placeholder="Bedrifts-/Org. navn"
            id="bedriftNavn"
            value={formData.bedriftNavn}
            onChange={handleChange}
            className={styles.textfieldBedrift}
          />

          <input
            type="email"
            placeholder="Epost"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.textfieldEmail}
          />

          <input
            type="password"
            placeholder="Passord"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className={styles.textfieldPw}
          />
          {validation.errorMessages.includes(
            "Passordet må være minst 6 tegn"
          ) && (
            <p className={styles.errorMessage}>{validation.errorMessages[1]}</p>
          )}
          {validation.errorMessages.includes(
            "Passordet må inneholde minst én bokstav"
          ) && (
            <p className={styles.errorMessage}>{validation.errorMessages[2]}</p>
          )}
          {validation.errorMessages.includes(
            "Passordet må inneholde minst ett tall"
          ) && (
            <p className={styles.errorMessage}>{validation.errorMessages[3]}</p>
          )}

          <br />
          <div>
            <button type="submit" className={styles.regBtn}>
              Opprett konto
            </button>
            <p>
              Har du allerede konto?{" "}
              <Link href="/login" className={styles.link}>
                Logg inn her
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
/*
<Image
src={workplace}
priority={true}
alt="workplace"
className={styles.images}
></Image> */