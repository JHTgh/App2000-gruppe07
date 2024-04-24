"use client";
import React, { useEffect, useState } from "react";
import { finnAnsatteBedrift, queryBrukerNavn } from "@/app/database/querys";
import AnsattForm from "@/app/components/ansattForm";
import styles from "./page.module.css";
import Link from "next/link";
import { hentAlleProfiler } from "../api/querys/profiler/hentAlleProfiler";

export function AlleAnsatte({ bedriftId, bruker }) {
  const [isFormVisible, setFormVisible] = useState(false);
  const [ansatteListe, setAnsatteListe] = useState([]);
  const [antallAnsatt, setAntallAnsatt] = useState(0);
  const [isListVisible, setIsListVisible] = useState(false);
  const [lastFetchTime, setLastFetchTime] = useState(0);

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  const fetchEmployeeList = () => {
    const currentTime = new Date().getTime();

    // Only fetch data if the list is empty or if more than 5 minutes have passed since the last fetch
    if (!ansatteListe.length || currentTime - lastFetchTime > 300000) {
      hentAlleProfiler(bedriftId)
        .then((data) => {
          // [ { id, navn, epost, scoreData } ]
          setAnsatteListe(data);
          setAntallAnsatt(ansatteListe.length);
          console.log(antallAnsatt);
          setIsListVisible(true);

          setLastFetchTime(currentTime); // Update the last fetch time
        })
        .catch((error) => {
          console.error("Error fetching employees: ", error);
        });

      // finnAnsatteBedrift(bedriftId)
      //   .then((querySnapshot) => {
      //     const aListe = [];
      //     querySnapshot.forEach((doc) => {
      //       aListe.push(doc.data());
      //     });
      //     setAnsatteListe(aListe);
      //     setAntallAnsatt(ansatteListe.length);
      //     setIsListVisible(true);

      //     setLastFetchTime(currentTime); // Update the last fetch time
      //   })
      //   .catch((error) => {
      //     console.error("Error fetching employees: ", error);
      //   });
    }
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.alleAnsatte}`}>
        <h1 className={styles.ansatteTekst}>Ansatte i </h1>{" "}
        <h1 className={styles.displayBedriftnavn}> {bruker}</h1>
      </div>
      <div style={{ width: "50%" }}>
        <button
          className={styles.ansattListeButton}
          onClick={() => {
            fetchEmployeeList();
            setIsListVisible(!isListVisible);
          }}
        >
          {isListVisible ? "Skjul ansatte" : "Vis ansatte"}
        </button>
        <table
          className={`${styles.ansattListe} ${
            isListVisible ? "" : styles.hide
          }`}
        >
          <thead>
            <tr>
              <th>Navn</th>
              <th>Stilling</th>
              <th>Sammenlign</th>
            </tr>
          </thead>
          {ansatteListe && ansatteListe.length > 0 && (
            <tbody>
              {ansatteListe.map((ansatt, index) => (
                <tr key={index}>
                  <td>
                    <Link
                      className={styles.link}
                      href={`./profil/${ansatt.id}`}
                    >
                      {ansatt.navn}
                    </Link>
                  </td>
                  <td>Selger</td>
                  <td>✅</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
        <h3 className={styles.antallAnsatte}>Antall ansatte </h3>
        {antallAnsatt}
      </div>

      <div style={{ width: "50%" }}>
        <h2
          style={{
            fontSize: "4em",
            fontWeight: "bold",
            color: "#007bff",
            fontFamily: "Roboto, sans-serif",
            marginBottom: "10px",
          }}
        ></h2>
        <div style={{ cursor: "pointer" }} onClick={toggleFormVisibility}>
          <span style={{ fontSize: "3em", color: "#007bff" }}>+</span>
        </div>
        {isFormVisible && (
          <div>
            <AnsattForm bedriftId={bedriftId} />
          </div>
        )}
      </div>
    </div>
  );
}
