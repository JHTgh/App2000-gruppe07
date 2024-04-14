"use client";
import React, { useEffect, useState } from 'react';
import { db } from "../../database/firebase";
import { addDoc, collection, doc, query, where, getDocs } from "firebase/firestore";
import {finnAnsatteBedrift} from "../../database/querys";
import { userUId } from "../layout";
import { EmployeeForm } from '@/app/components/employeeForm';

  const ProfilListe = () => {
    const [isFormVisible, setFormVisible] = useState(false);
    const [ansatteListe, setAnsatteListe] = useState([]);
    const [isListVisible, setIsListVisible] = useState(false);
    const [bedriftId, setBedriftId] = useState(null);
    
    // bruker id kan bruke litt tid på å bli hentet derfor må vi ha det i en suspense (useEffect)
    useEffect(() => {
      const hentBrukerData = async () => {
          const uId = await userUId; // Vente på IDen
          setBedriftId(uId);
          console.log('uID: (leggTil - page) ' + uId);
      };
  
      hentBrukerData();
  }, []);

  if(!bedriftId) {
    return <div>Loading...</div>;
  }


  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };
  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  finnAnsatteBedrift(bedriftId)
  .then((querySnapshot) => {
    const aListe = [];
    querySnapshot.forEach((doc) => {
      aListe.push(doc.data());
    });
    // Once you have the list of employees, you can display it or use it as needed
    setAnsatteListe(aListe);

  })
  .catch((error) => {
    console.error('Error fetching employees: ', error);
  });


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1 style={{ fontSize: '3em', fontWeight: 'bold', color: '#333', marginBottom: '20px', fontFamily: 'Roboto, sans-serif' }}>Velkommen</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ fontSize: '4em', fontWeight: 'bold', color: '#007bff', fontFamily: 'Roboto, sans-serif', marginBottom: '10px' }}>Legg til brukere</h2>
        <div style={{ cursor: 'pointer' }} onClick={toggleFormVisibility}>
          <span style={{ fontSize: '3em', color: '#007bff' }}>+</span>
        </div>
        <div>
          {isFormVisible && (
            <div>
              <EmployeeForm bedriftId="2UAfkMDJHZR58Uay3pVs1LKPQL22" />
            </div>
          )}
        </div>
        <button   style={{
   padding: '10px 20px',
    fontSize: '1em',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    marginTop: '20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  }} onClick={toggleListVisibility}>
          {isListVisible ? 'Skjul ansattliste' : 'Vis ansattliste'}
        </button>
        {isListVisible && (
          <ul style={{ listStyleType: 'none', padding: 0, marginTop: '10px' }}>
            {ansatteListe.map((ansatt, index) => (
              <li key={index} style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px' }}>
                <strong>Name:</strong> {ansatt.name} | <strong>Email:</strong> {ansatt.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProfilListe;