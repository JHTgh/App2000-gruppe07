import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import styles from "./component.module.css";

/**
 * @author Jørgen og Kjartan  
 * @contributor Mie, Codeium (for JSDoc)
 * 
 * Komponent for ett diagram, kan brukes til forskjellige temaer
 *
 * @param {object} testData - ett objekt med scoreData og titteler
 * @return {JSX.Element} et diagram komponent
 */
const SingelChart = ({testData, navn}) => {  

  const scoreData = testData.map((enTest) => {
    return {
      score: enTest.score,
      lable: enTest.title
    }
  })
  console.log('scoreData',scoreData);

  const data = {
    labels: scoreData.map(enKolonne => enKolonne.lable),
    datasets: [{
      label: navn,
      data: scoreData.map(enKolonne => enKolonne.score),
      borderWidth: 1,
      barThickness: 20
    }],
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
      <div className={styles.chartContainer }>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};


export default SingelChart;
  