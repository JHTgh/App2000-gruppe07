"use client";
import { useRouter } from "next/navigation";
import { handleLoginSubmit } from "../api/login/login";
import styles from "./page.module.css";
import { useState } from "react";


function validerData(formData) {
  const errors = [];
  if (!formData.email) {
    errors.push ("Email is required");
  }
  if (!formData.password) {
    errors.push("Password is required");
  }
  return {isValid: errors.length === 0, errorMesg: errors};
}

export default function Login () {
  const router = useRouter();
  const [suksess, setSuksess] = useState(false);
  const [inlogMessage, setInlogMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  


  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const [validation, setValidation] = useState({ isValid: true, errorMessages: [] });

  const handleSubmit = async (event) => {
    console.log("logging in...");
    event.preventDefault();

    const validationResult = validerData(formData);
    console.log('inndata valideres')
    setValidation(validationResult);
    console.log(validationResult)
    if (validationResult.isValid) {
      console.log('inndata er gyldig - vendter på innlogging fra backend')
      // Prøver å logge inn bruker
      const svar = await handleLoginSubmit(formData);
      setSuksess(svar.suksess);
      setInlogMessage(svar.error);
      if(svar.suksess) {
        router.push('/dashboard');
      }
    }
  };

    return (
      <div className={styles.flexbox}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.container}>
            <h3>
              Log In
            </h3>
            {suksess && (
              <div className={styles.successMessage}>
                Suksess! Du er logget inn.
              </div>
            )}

            <label htmlFor="email" id="email">
              Email:
            </label>
            <input 
              type="email" id="email" 
              value={formData.email}
              onChange={handleChange}
              required />
            <label htmlFor="password" id="password">
              Password:
            </label>
            <input 
              type="password" 
              id="password" 
              value={formData.password}
              onChange={handleChange}
              required />
            <br />
            <div>
              <button type="submit">Log in</button>
            </div>

            {inlogMessage !== "" || !validation.isValid ? (
              <div className={styles.errorMessage}>
                {inlogMessage}
                {validation.errorMesg}
              </div>
            ): null}
          </div>
        </form>
      </div>
    )
}