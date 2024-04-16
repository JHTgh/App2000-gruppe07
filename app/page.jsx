"use client";

import styles from "./page.module.css";
import Image from "next/image";
import firebase from "./database/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import styles from "./page.module.css";
import handleLoginSubmit from "./login/login.js";
import handleRegSubmit from "./signup/signup";
import Link from "next/link";
import Users from "./userlist/users";

export default function Home() {
  return (
    // Sign-Up
    <main className={styles.main}>
      <div className={styles.container}>
        <form onSubmit={handleRegSubmit} className={styles.signupForm}>
          <h1>Her kan du opprette bruker</h1>
          <input type="text" id="name" placeholder="username" />
          <input type="email" id="email" placeholder="email" />
          <input
            type="password"
            id="password"
            placeholder="password"
            required
          />
          <br />
          <div className={styles.btnContainer}>
            <button className={styles.submitBtn} type="submit">
              Create account
            </button>
          </div>
        </form>
      </div>

      <div className={styles.container}>
        <form onSubmit={handleLoginSubmit} className={styles.signupForm}>
          <h3>
            Her kan du prøve å logge inn med brukeren du nettopp opprettet
          </h3>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />
          <br />
          <div className={styles.btnContainer}>
            <button className={styles.submitBtn} type="submit">
              Log in
            </button>
          </div>
        </form>
      </div>
      <div className="users-comp-right">
        <Users></Users>
      </div>
    </main>
  );
}
