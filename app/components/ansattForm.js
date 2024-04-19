"use client";
import React, { useEffect, useState } from 'react';
import { db } from "@/app/database/firebase";
import { addDoc, collection, doc, query, where, getDocs } from "firebase/firestore";

export default function AnsattForm ({ bedriftId })  {
  const [employeeData, setEmployeeData] = useState({
    name: '',
    email: '',
    address: '',
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

        const ansatteCollection = collection(db, 'ansatte');

        
      // Putter inn firma som FK til ansatt. 
        const employeeWithCompany = {
        ...employeeData,
        companyId: bedriftId
      };
      
    const newEmployeeRef = await addDoc(ansatteCollection, employeeWithCompany);
    /*const newEmployeeRefId = newEmployeeRef.id;

      const testResultCollection = collection (db, "testResults");

      const testResultsData = {
        Ekstroversjon: Math.floor(Math.random()*101),
        Nevrotisisme: Math.floor(Math.random()*101),
        Samhandling: Math.floor(Math.random()*101),
        Selvinnsikt: Math.floor(Math.random()*101),
        Tillit: Math.floor(Math.random()*101),
        ansattId: newEmployeeRef.id
      }
      */

      //await addDoc(testResultCollection, testResultsData);

      // Legger til data om ansatt
    // await addDoc(ansatteCollection, employeeWithCompany);
      // Blanker ut form etter en bruker er opprettet. 
      setEmployeeData({
        name: '',
        email: '',
        address: '',
        testId: '',

      });
    } catch (error) {
      console.error('Error adding employee: ', error);
    }
  }

  return (
    <form onSubmit = {handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px', padding: '20px', border: '1px solid #eee', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="name" style={{ marginBottom: '10px' }}>Name:</label>
        <input type="text" id="name" value={employeeData.name} onChange={handleChange} style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '20px' }} />
        <label htmlFor="email" style={{ marginBottom: '10px' }}>Email:</label>
        <input type="email" id="email" value={employeeData.email} onChange={handleChange} style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '20px' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="address" style={{ marginBottom: '10px' }}>Address:</label>
        <input type="text" id="address" value={employeeData.address} onChange={handleChange} style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '20px' }} />
      <label htmlFor="testId" style={{ marginBottom: '10px' }}>TestId:</label>
        <input type="text" id="testId" value={employeeData.testId} onChange={handleChange} style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '20px' }} />
        <button type="submit">Add Employee</button>
      </div>
    </form>
  );
};