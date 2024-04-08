'use client';
import React from "react";
import { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { db } from "../database/firebase";
import { queryBrukerNavn, queryBrukerScore } from "../database/querys";
import { Bar } from "react-chartjs-2";
import { doc, getDoc } from 'firebase/firestore';


const BarChart = ({uIdTab}) => {

  const [data, setData] = useState();
  const [objTeller, setObjTeller] = useState(0);

  useEffect(() => {
    const hentData = async () => {
      if(uIdTab.length === 0){
        return
      }

      // gjør klar dataen til datasets
      let obj = [];
      for (let i = 0; i < uIdTab.length; i++) {
        const nyttObj = {
          navn: await queryBrukerNavn(uIdTab[i]),
          score: await queryBrukerScore(uIdTab[i]),
        }
        obj = [...obj, nyttObj];
        setObjTeller(objTeller + 1);
      }

      const data = {
        labels: [
          "Ekstroversjon",
          "Nevrotisisme",
          "Samhandling",
          "Selvinnsikt",
          "Tillit",
        ],
        datasets: obj.map((obj) => {
          return {
            label: obj.navn,
            data: obj.score,
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

      setData(data);
      
    };

    hentData();
  }, [uIdTab]);

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

  console.log('objTeller lengde: ' + objTeller + ', uIdTab lengde: ' + uIdTab.length);

  if(!data) {
    return <p>Laster inn...</p>;
  }
  
  if (objTeller !== uIdTab.length) {
    return <p>Laster inn...</p>;
  }

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
