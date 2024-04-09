"use client";
import { handleLoginSubmit } from "../api/login/login";
import styles from "./page.module.css";

export default function Login () {
    return (
      <div className={styles.flexbox}>
        <form className={styles.form} onSubmit={handleLoginSubmit}>
          <div className={styles.container}>
            <h3>
              Log In
            </h3>
            <label htmlFor="email" id="email">
              Email:
            </label>
            <input type="email" id="email" required />
            <label htmlFor="password" id="password">
              Password:
            </label>
            <input type="password" id="password" required />
            <br />
            <div>
              <button type="submit">Log in</button>
            </div>
          </div>
        </form>
      </div>
    )
}