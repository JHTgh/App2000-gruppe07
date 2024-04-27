'use client';
import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import styles from "./page.module.css";


const BarChart = ({tittel, testData}) => {
  console.log(testData);

  const data = {
    labels: [
      tittel[0],
      tittel[1],
      tittel[2],
      tittel[3],
      tittel[4],
    ],
    datasets: testData.map((enTest) => {
      return {
        label: enTest.navn,
        data: enTest.score,
        backgroundColor: [
          enTest.farge,
        ],
        borderColor: [
          "rgba(255, 255, 255, 0.5)",
        ],
        borderWidth: 1,
        barThickness: 20
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
      <div className={styles.chartContainer}>
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
