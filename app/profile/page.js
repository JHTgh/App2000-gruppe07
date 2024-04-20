"use client";
import React from "react";
import styles from "../page.module.css";
import { useRouter } from "next/navigation";

export default function () {
  const { name } = useRouter();

  return (
    <div className="profileContainer">
      <div className={styles.profile}>
        <h1 id={styles.welcomeText}>Velkommen {name}</h1>
        <div id={styles.card}></div>
      </div>
    </div>
  );
}
