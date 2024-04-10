"use client";
import { handleLoginSubmit } from "../api/login/login";
import styles from "./page.module.css";
import { useState } from "react";


function validerData(formData) {
  const errors = {};
  if (!formData.email) {
    errors.email = "Email is required";
  }
  if (!formData.password) {
    errors.password = "Password is required";
  }
  return errors;
}

export default function Login () {

  const [suksess, setSuksess] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });


  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const [validation, setValidation] = useState({ isValid: true, errorMessages: [] });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationResult = validerData(formData);
    setValidation(validationResult);
    if (validationResult.isValid) {
      // Prøver å logge inn bruker
      const svar = await handleLoginSubmit(formData);
      setSuksess(svar.suksess);
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
                Suksess! Profilen din er opprettet.
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
          </div>
        </form>
      </div>
    )
}