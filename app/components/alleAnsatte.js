"use client";
import React, { useEffect, useState } from "react";
import { finnAnsatteBedrift } from "@/app/database/querys";
import AnsattForm from "@/app/components/ansattForm";
import styles from "./alleAnsatte.module.css";

export function AlleAnsatte({ bedriftId }) {
  const [isFormVisible, setFormVisible] = useState(false);
  const [ansatteListe, setAnsatteListe] = useState([]);
  const [isListVisible, setIsListVisible] = useState(false);
  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };
  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  const fetchEmployeeList = () => {
    const currentTime = new Date().getTime();
    // Only fetch data if the list is empty or if more than 5 minutes have passed since the last fetch
    if (!ansatteListe.length || currentTime - lastFetchTime > 300000) {
      finnAnsatteBedrift(bedriftId)
        .then((querySnapshot) => {
          const aListe = [];
          querySnapshot.forEach((doc) => {
            aListe.push(doc.data());
          });
          setAnsatteListe(aListe);
          setLastFetchTime(currentTime); // Update the last fetch time
        })
        .catch((error) => {
          console.error("Error fetching employees: ", error);
        });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapperListe}>
        <h2>Ansatte Liste</h2>
        <button className={styles.button} onClick={fetchEmployeeList}>
          Vis ansattliste/oppdater
        </button>
        <ul>
          {ansatteListe.map((ansatt, index) => (
            <li key={index}>
              <strong>Name:</strong> {ansatt.name} | <strong>Email:</strong>{" "}
              {ansatt.email}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.AddUserContainer}>
        <div className={styles.AddUserWrapper} onClick={toggleFormVisibility}>
          <h2>Legg til ny person</h2>
          <button className={styles.button}>Legg til ny</button>
          {isFormVisible && (
            <div className={styles.formContainer}>
              <AnsattForm bedriftId={bedriftId} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
