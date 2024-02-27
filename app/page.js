"use client";
import Image from "next/image";
import firebase from "./database/firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import styles from "./page.module.css";
import handleLoginSubmit from "./login/login.js";
import handleRegSubmit from "./signup/signup";
import SearchComponent from "./search/search";
import Link from "next/link";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.regContainer}>
        <form onSubmit={handleRegSubmit} className={styles.signupForm}>
          <h1>Her kan du opprette bruker</h1>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" />
          <label htmlFor="email" id="email">Email:</label>
          <input type="email" id="email" />
          <label htmlFor="password" id="password">Password:</label>
          <input type="password" id="password" required />
          <br />
          <div className={styles.btnContainer}>
            <button className={styles.submitBtn} type="submit">Create account</button>
          </div>
        </form>
      </div>

      <div className={styles.container}>
        <form onSubmit={handleLoginSubmit} className={styles.loginForm}>
          <h3>Her kan du prøve å logge inn med brukeren du nettopp opprettet</h3>
          <label htmlFor="email" id="email">Email:</label>
          <input type="email" id="email" required />
          <label htmlFor="password" id="password">Password:</label>
          <input type="password" id="password" required />
          <br />  
          <div className={styles.btnContainer}>
            <button className={styles.submitBtn} type="submit">Log in</button>
          </div>
        </form>

        <div className={styles.searchContainer}>
          <br />
          <h3>Her kan du søke etter brukernavn og navn</h3>
          <SearchComponent />
        </div>
      </div>
    </main>
  );
}

