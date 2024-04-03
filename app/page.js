"use client";
import { firebase } from "./database/firebase";
import styles from "./page.module.css";
import { UpdateUser } from "./update/update"; //import { UpdateUser } from "./update/update";
import { handleLoginSubmit } from "./login/login";
import { handleRegSubmit } from "./signup/signup";
import { HandleUsers } from "./userlist/handleUsers";

export default function Home() {
  return (
    <div>
      <h1> BigFive CRUD GRUPPE 07</h1>
      <h1> Hei </h1>
      <div className={styles.flexbox}>
        <form className={styles.form} onSubmit={handleRegSubmit}>
          <div className={styles.container}>
            <h3>Her kan du opprette bruker</h3>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" />
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" />
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

      <div className={styles.flexbox}>
        <form className={styles.form} onSubmit={handleLoginSubmit}>
          <div className={styles.container}>
            <h3>
              Her kan du prøve å logge inn med brukeren du nettopp opprettet
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
      <div className={styles.flexbox}>
        <div className={styles.container}>
          <HandleUsers />
        </div>{" "}
      </div>
      <div className={styles.flexbox}>
        <div className={styles.container}>
          <UpdateUser />
        </div>{" "}
      </div>
    </div>
  );
}
