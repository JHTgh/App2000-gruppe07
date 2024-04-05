import React from "react";
import { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { db, queryBrukerNavn, queryBrukerScore } from "../database/firebase";
import { Bar } from "react-chartjs-2";
import { doc, getDoc } from 'firebase/firestore';


const BarChart = () => {

  const data = {
    labels: [
      "Ekstroversjon",
      "Nevrotisisme",
      "Samhandling",
      "Selvinnsikt",
      "Tillit",
    ],
    datasets: [
     setEnBruker("dwf0OCy3doWpatHw8QnjpfSs4qS2"),
    ],
  };

  const options = {
    scales: {
      x: {
        type: "category", // Bruk 'category' for kategorisk data
      },
      y: {
        beginAtZero: true, // Start y-aksen fra null
      },
    },
  };

  return (
    <div>
      <div style={{ width: "800px", height: "500px" }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

/*

export async function hentBrukerData( uID) {
  // funksjon som henter data om bruker ved hjelp av uID (som er lik i begge databasene i firebase)


  // Create a reference to the cities collection
  const docRef = db.collection('users');

  // Create a query against the collection
  const queryRef = docRef.where('uid', '==', uID);

  const [brukerNavn, setBrukerNavn] = useState([]);
  const [brukerScore, setBrukerScore] = useState([]);

  if (queryRef.exists()) {
    //lagrer navnet til bruker
    setBrukerNavn(queryRef.data().name);
  } else {
    console.log("No such document!");
  }
  //henter info om score fra en annen database
  const docRef2 = db.collection("testRes");
  const queryRef2 = docRef2.where('uid', '==', uID);
  if (queryRef2.exists()) {
    setBrukerScore(queryRef2.data());
  } else {
    console.log("No such document!");
  }
  // i brukerScore er det en kollonne i tabellen som heter uID den vil vi ha vekk
  const score = [];
  // det vil alltid være fem verdier vi vil ha 
  // kan hende vi må snu denne løkken, sjekk dette !!!                                              ---!!!---
  for (let i = 0; i < 5; i++) {
    score.push(brukerScore[i]);
  }
  // slik har vi tatt vekk unødvendig data
  // vi returnerer navn og score
  return [brukerNavn, score];
}*/

// vi må også "bygge" hele blokken med kode til å sette opp charts altså alt i datasets
// vi gjør dette i en funksjon

export async function setEnBruker(uID) {

  // vi henter info om bruker fra databasen ved hjelp av metoder laget for database
  // legger også inn en random farge for denne brukeren i chartsen
  return {
    label: queryBrukerNavn(uID),
    data: queryBrukerScore(uID),
    backgroundColor: [
      getRandomColors(),
    ],
    borderColor: [
      "rgba(255, 255, 255, 0.5)",
    ],
    borderWidth: 1,
    barThickness: 30,
  }
}

const getRandomColors = () => {
  // funksjon som returnerer en random farge
  return (`rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.2)`);
};


export default BarChart;
