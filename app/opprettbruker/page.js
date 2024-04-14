"use client";
import { useState } from "react";
import { handleRegSubmit } from "../api/signup/signup";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

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
  const [validation, setValidation] = useState({ isValid: true, errorMessages: [] });
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
      if(svar.suksess) {
        naviger.push('/dashboard');
      }
    }
  };

  return (
    <div className={styles.flexbox}>
      <form className={styles.form} onSubmit={handleSubmit}>
        {suksess && (
          <div className={styles.successMessage}>
            Suksess! Profilen din er opprettet.
          </div>
        )}

        <div className={styles.container}>
          <h3>Opprett bedriftskonto</h3>
          <label htmlFor="bedriftNavn">
            Bedriftsnavn:{" "}
            {validation.errorMessages.includes("Bedriftsnavn er påkrevd") && (
              <span className={styles.error}>*</span>
            )}
          </label>
          <input
            type="text"
            id="bedriftNavn"
            value={formData.bedriftNavn}
            onChange={handleChange}
            className={
              validation.errorMessages.includes("Bedriftsnavn er påkrevd")
                ? styles.errorInput
                : ""
            }
          />
          {validation.errorMessages.includes("Bedriftsnavn er påkrevd") && (
            <p className={styles.errorMessage}>
              {validation.errorMessages[0]}
            </p>
          )}
  
          <label htmlFor="email">
            E-postadresse:{" "}
            {validation.errorMessages.includes("Ugyldig e-postadresse") && (
              <span className={styles.error}>*</span>
            )}
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={
              validation.errorMessages.includes("Ugyldig e-postadresse")
                ? styles.errorInput
                : ""
            }
          />
          {validation.errorMessages.includes("Ugyldig e-postadresse") && (
            <p className={styles.errorMessage}>
              {validation.errorMessages[0]}
            </p>
          )}
  
          <label htmlFor="password">
            Passord:{" "}
            {validation.errorMessages.includes("Passordet må være minst 6 tegn") && (
              <span className={styles.error}>*</span>
            )}
            {validation.errorMessages.includes("Passordet må inneholde minst én bokstav") && (
              <span className={styles.error}>*</span>
            )}
            {validation.errorMessages.includes("Passordet må inneholde minst ett tall") && (
              <span className={styles.error}>*</span>
            )}
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className={
              validation.errorMessages.includes("Passordet må være minst 6 tegn") ||
              validation.errorMessages.includes("Passordet må inneholde minst én bokstav") ||
              validation.errorMessages.includes("Passordet må inneholde minst ett tall")
                ? styles.errorInput
                : ""
            }
          />
          {validation.errorMessages.includes("Passordet må være minst 6 tegn") && (
            <p className={styles.errorMessage}>
              {validation.errorMessages[1]}
            </p>
          )}
          {validation.errorMessages.includes("Passordet må inneholde minst én bokstav") && (
            <p className={styles.errorMessage}>
              {validation.errorMessages[2]}
            </p>
          )}
          {validation.errorMessages.includes("Passordet må inneholde minst ett tall") && (
            <p className={styles.errorMessage}>
              {validation.errorMessages[3]}
            </p>
          )}
  
          <br />
          <div>
            <button type="submit">Opprett konto</button>
          </div>
        </div>
      </form>
    </div>
  );
}