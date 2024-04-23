'use client';
import React from "react";
import { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { db } from "../../database/firebase";
import { queryBrukerNavn, queryBrukerScore } from "../../database/querys";
import { Bar } from "react-chartjs-2";
import { doc, getDoc } from 'firebase/firestore';


const BarChart = ({tittel, navn, score}) => {

  const data = {
    labels: [
      tittel[0],
      tittel[1],
      tittel[2],
      tittel[3],
      tittel[4],
    ],
    datasets: obj.map((obj) => {
      return {
        label: navn,
        data: score,
        backgroundColor: [
          getRandomColors(),
        ],
        borderColor: [
          "rgba(255, 255, 255, 0.5)",
        ],
        borderWidth: 1,
        barThickness: 30
      };
    }),
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


const getRandomColors = () => {
  // funksjon som returnerer en random farge
  return (`rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.8)`);
};


export default BarChart;
