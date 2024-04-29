'use client';
import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import styles from "./page.module.css";

/**
 * @author Jørgen og Kjartan
 * @con Mie, Codeium (JSDoc)
 * Bygger opp ett diagram for valgte profiler 
 *
 * @param {Array} props.tittel - en tabell med titteler for søylene
 * @param {Array} props.testData - en tabell med hvor lang hver søyle er samt farge og navn
 * @return {JSX.Element} BarChart komponenten - altså ett diagram
 */
const BarChart = ({tittel, testData}) => {
  console.log(testData);

  const data = {
    labels: tittel,
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
export default BarChart;
