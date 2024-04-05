import React from "react";
import { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { db } from "../database/firebase";
import { queryBrukerNavn, queryBrukerScore } from "../database/querys";
import { Bar } from "react-chartjs-2";
import { doc, getDoc } from 'firebase/firestore';


const BarChart = ({uIdTab}) => {


  const data = {
    labels: [
      "Ekstroversjon",
      "Nevrotisisme",
      "Samhandling",
      "Selvinnsikt",
      "Tillit",
    ],
    datasets: uIdTab.map( (uIdTab) => setEnBruker(uIdTab)),
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


// vi må også "bygge" hele blokken med kode til å sette opp charts altså alt i datasets
// vi gjør dette i en funksjon

export async function setEnBruker(uID) {

  const navn = await queryBrukerNavn(uID);
  const score = await queryBrukerScore(uID);
  const scoreData = score.map(Number);
  console.log(navn, scoreData);
  const formatertNavn = '"' + navn + '"';

  let formatertScore = "";
  formatertScore = "[";
  for(let i = 0; i < 5; i++) {
    formatertScore += scoreData[i];
    if(i < 4) {
      formatertScore += ", ";
    }
  }
  formatertScore += "]";
  console.log(formatertScore);
  console.log(formatertNavn);

  // vi henter info om bruker fra databasen ved hjelp av metoder laget for database
  // legger også inn en random farge for denne brukeren i chartsen
  return {
    label: formatertNavn,
    data: formatertScore,
    backgroundColor: [
      getRandomColors(),
    ],
    borderColor: [
      "rgba(255, 255, 255, 0.5)",
    ],
    borderWidth: 1,
    barThickness: 30
  }
}

const getRandomColors = () => {
  // funksjon som returnerer en random farge
  return (`rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.2)`);
};


export default BarChart;
