"use client";
import { handleRegSubmit } from "../api/signup/signup";
import styles from "./page.module.css";

export default function oppretteBruker () {
    return (
        <div className={styles.flexbox}>
        <form className={styles.form} onSubmit={handleRegSubmit}>
          <div className={styles.container}>
            <h3> Opprett bedriftskonto </h3>
            <label htmlFor="bedriftNavn"> Bedriftsnavn: </label>
            <input type="text" id="bedriftNavn" />
            <label htmlFor="email" id="email">
              Email:
            </label>
            <input type="email" id="email" />
            <label htmlFor="password" id="password">
              Password:
            </label>
           <input type="password" id="password" required /> 

            <br />
            <div>
              <button type="submit">Create account</button>{" "}
            </div>
          </div>
        </form>
      </div>
    )
}