"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/app/database/firebase";
import {
  addDoc,
  collection,
  doc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { leggTilAnsatt } from "../api/profil/ansatt/leggTilAnsatt";
import { hentTestTilDatabase } from "../api/big5/hentTestTilDatabase";

export default function AnsattForm({ bedriftId }) {
  const [employeeData, setEmployeeData] = useState({
    name: "",
    email: "",
    address: "",
    testId: "",
  });

  const handleChange = (e) => {
    setEmployeeData({
      ...employeeData,
      [e.target.id]: e.target.value,
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
        companyId: bedriftId,
      };
      console.log("employeeWithCompany:");
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
        name: "",
        email: "",
        address: "",
        testId: "",
      });
    } catch (error) {
      console.error("Error adding employee: ", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
        marginTop: "20px",
        padding: "20px",
        border: "1px solid #eee",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="name" style={{ marginBottom: "10px" }}>
          Fullt navn:
        </label>
        <input
          type="text"
          id="name"
          value={employeeData.name}
          onChange={handleChange}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginBottom: "20px",
          }}
        />
        <label htmlFor="email" style={{ marginBottom: "10px" }}>
          E-post:
        </label>
        <input
          type="email"
          id="email"
          value={employeeData.email}
          onChange={handleChange}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginBottom: "20px",
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="address" style={{ marginBottom: "10px" }}>
          Adresse:
        </label>
        <input
          type="text"
          id="address"
          value={employeeData.address}
          onChange={handleChange}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginBottom: "20px",
          }}
        />
        <label htmlFor="testId" style={{ marginBottom: "10px" }}>
          TestId:
        </label>
        <input
          type="text"
          id="testId"
          value={employeeData.testId}
          onChange={handleChange}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginBottom: "20px",
          }}
        />
        <button type="submit">Legg til ansatt</button>
      </div>
    </form>
  );
}
