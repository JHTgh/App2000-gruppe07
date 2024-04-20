"use client";
import React, { useEffect, useState } from 'react';
import {finnAnsatteBedrift} from '@/app/database/querys';
import AnsattForm from '@/app/components/ansattForm';

export function AlleAnsatte({bedriftId}) {
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
    if (!ansatteListe.length || (currentTime - lastFetchTime > 300000)) {
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
          console.error('Error fetching employees: ', error);
        });
    }
  };
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1 style={{ fontSize: '3em', fontWeight: 'bold', color: '#333', marginBottom: '20px', fontFamily: 'Roboto, sans-serif' }}>Velkommen</h1>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
        <div style={{ width: '50%' }}>
          <h2 style={{ fontSize: '2em', fontWeight: 'bold', color: '#007bff', fontFamily: 'Roboto, sans-serif', marginBottom: '10px' }}>Ansatte Liste</h2>
          <button onClick={fetchEmployeeList}>Vis ansattliste/oppdater</button><ul style={{ listStyleType: 'none', padding: 0, marginTop: '10px' }}>
            {ansatteListe.map((ansatt, index) => (
              <li key={index} style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px' }}>
                <strong>Name:</strong> {ansatt.name} | <strong>Email:</strong> {ansatt.email}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ width: '50%' }}>
          <h2 style={{ fontSize: '4em', fontWeight: 'bold', color: '#007bff', fontFamily: 'Roboto, sans-serif', marginBottom: '10px' }}>Legg til brukere</h2>
          <div style={{ cursor: 'pointer' }} onClick={toggleFormVisibility}>
            <span style={{ fontSize: '3em', color: '#007bff' }}>+</span>
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