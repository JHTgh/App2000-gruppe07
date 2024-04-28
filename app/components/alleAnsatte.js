"use client";
import React, { useEffect, useState } from 'react';
import {finnAnsatteBedrift} from '@/app/api/querys/bedrift/finnAnsattBedrift';
import AnsattForm from '@/app/components/ansattForm';
import styles from './page.module.css';

export function AlleAnsatte({bedriftId}) {
  const [isFormVisible, setFormVisible] = useState(false);
  const [ansatteListe, setAnsatteListe] = useState([]);
  const [isListVisible, setIsListVisible] = useState(false);
  const [lastFetchTime, setLastFetchTime] = useState(0);
  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };
  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  const fetchEmployeeList = () => {
    const currentTime = new Date().getTime();
    // Only fetch data if the list is empty or if more than 5 minutes have passed since the last fetch
    if (!ansatteListe.length || (currentTime - lastFetchTime > 300000)) {
      finnAnsatteBedrift(bedriftId)
        .then((querySnapshot) => {
          const aListe = [];
          querySnapshot.forEach((doc) => {
            aListe.push(doc.data());
            console.log('Ansatte: ', doc.data());
          });
          setAnsatteListe(aListe);
          setLastFetchTime(currentTime); // Update the last fetch time
        })
        .catch((error) => {
          console.error('Error fetching employees: ', error);
        });
    }
  };
  
  return (
    <div className = {styles.alleAnsatte}>
      <div className = {styles.alleAnsatteContainer}>
        <div className = {styles.førsteContainer}>
          <h2 className = {styles.visAnsatte}>Ansatt liste:</h2>
          <button className = {styles.leggTilAnsatteKnapp} onClick={fetchEmployeeList}>Vis ansattliste/oppdater</button>
          <ul className = {styles.ansatteListe}>
            {ansatteListe.map((ansatt, index) => (
              <li className = {styles.ansatteListevisning} key={index}>
                <strong>Navn:</strong> {ansatt.Navn} <strong>Epost:</strong> {ansatt.Epost} 
              </li>
            ))}
          </ul>
        </div>

        <div className= {styles.andreContainer}>
          <h2 className = {styles.leggTilAnsatte}>Legg til brukere</h2>
          <div style={{ cursor: 'pointer' }} onClick={toggleFormVisibility}>
            <span className = {styles.leggTilKryss}>+</span>
          </div>
          {isFormVisible && (
            <div>
              <AnsattForm bedriftId={bedriftId} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}