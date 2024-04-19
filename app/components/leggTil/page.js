"use client";
import React, { useEffect, useState } from 'react';
import { db } from "../../database/firebase";
import { addDoc, collection, doc, query, where, getDocs } from "firebase/firestore";
import {finnAnsatteBedrift} from "../../database/querys";
import { userUId } from "../../dashboard/layout";

export const EmployeeForm = ({ bedriftId }) => {
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





export const DashboardBedrift = ({bedriftId}) => {
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
              <EmployeeForm bedriftId={bedriftId} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
  }
  /*
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
              <EmployeeForm bedriftId={bedriftId}/>
            </div>
          )}
        </div>

  <div>
    <div style={{ float: 'left', width: '50%' }}>
      <ul style={{ listStyleType: 'none', padding: 0, marginTop: '10px' }}>
        {ansatteListe.map((ansatt, index) => (
          <li key={index} style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px' }}>
            <strong>Name:</strong> {ansatt.name} | <strong>Email:</strong> {ansatt.email}
          </li>
        ))}
      </ul>
    </div>
    <div style={{ float: 'left', width: '50%' }}>
      {/* Add component goes here *//* 
    /*</div>
  </div>

      </div>
    </div>
  );
};

export default DashboardBedrift;

/*

<button   style={{padding: '10px 20px', fontSize: '1em',fontWeight: 'bold', color: '#fff', backgroundColor: '#007bff',
border: 'none', borderRadius: '5px', marginTop: '20px', cursor: 'pointer',
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
  </ul> */