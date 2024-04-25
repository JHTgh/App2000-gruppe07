"use client";
import React, { useEffect, useState } from 'react';
import { db } from "@/app/database/firebase";
import { addDoc, collection, doc, query, where, getDocs } from "firebase/firestore";
import { leggTilAnsatt } from '../api/profil/ansatt/leggTilAnsatt';
import { hentTestTilDatabase } from '../api/big5/hentTestTilDatabase';
import styles from './page.module.css';

export default function AnsattForm ({ bedriftId })  {
  const [employeeData, setEmployeeData] = useState({
    name: '',
    email: '',
    address: '',
    postnummer: '',
    jobbtittel: '',
    testId: ''
  });


  const handleChange = (e) => {
      setEmployeeData({
        ...employeeData,
        [e.target.id]: e.target.value
      });
    };
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Putter inn firma som FK til ansatt. 
      const employeeWithCompany = {
        navn: employeeData.name,
        epost: employeeData.email,
        adresse: employeeData.address,
        testId: employeeData.testId,
        companyId: bedriftId
      };
      console.log('employeeWithCompany:');
      console.log(employeeWithCompany);
      // legger til ny ansatt/profil i database.
      await leggTilAnsatt(employeeWithCompany);

      // legger inn score til database 
      // bruker testId som id for dokumentet også, slik at det er lett å finne igjen 
      await hentTestTilDatabase(employeeData.testId);
  
      // Legger til data om ansatt
      // await addDoc(ansatteCollection, employeeWithCompany);
      // Blanker ut form etter en bruker er opprettet. 
      setEmployeeData({
        name: '',
        email: '',
        address: '',
        postnummer: '',
        jobbtittel: '',
        testId: ''

      });
    } catch (error) {
      console.error('Error adding employee: ', error);
    }
  }

  return (
    <form className={styles.ansattForm} onSubmit = {handleSubmit} >
      <div className={styles.ansattContainer}>
        <label className={styles.ansattLabel} htmlFor="name">Navn:</label>
        <input className={styles.ansattInput} type="text" id="name" value={employeeData.name} onChange={handleChange}/>
        <label className={styles.ansattLabel} htmlFor="email" >Epost:</label>
        <input className={styles.ansattInput} type="email" id="email" value={employeeData.email} onChange={handleChange}/>
      </div>
      <div className= {styles.ansattContainer}>
        <label className={styles.ansattLabel} htmlFor="postnummer">Postnummer:</label>
        <input className={styles.ansattInput} type="text" id="postnummer" value={employeeData.postnummer} onChange={handleChange}/>
        <label className={styles.ansattLabel} htmlFor="jobbtittel">Jobbtittel:</label>
        <input className={styles.ansattInput} type="text" id="jobbtittel" value={employeeData.jobbtittel} onChange={handleChange}/>
      </div>
      <div className= {styles.ansattContainer}>
        <label className={styles.ansattLabel} htmlFor="address" >Addresse:</label>
        <input className={styles.ansattInput} type="text" id="address" value={employeeData.address} onChange={handleChange}/>
        <label className={styles.ansattLabel} htmlFor="testId">TestId:</label>
        <input className={styles.ansattInput} type="text" id="testId" value={employeeData.testId} onChange={handleChange}/>
       </div>
       <div className= {styles.ansattContainer}>
        <button className={styles.leggTilKnapp} type="submit">Legg til bruker</button>
      </div>
    </form>
  );
};