import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

/**
 * @author Kjartan og Jørgen
 * @contributor  Codeium (for JSDoc)
 * 
 * Komponent for ett diagram, kan brukes til forskjellige temaer
 *
 * @param {object} testData - ett objekt med scoreData og titteler
 * @return {JSX.Element} et diagram komponent
 */
const SingelChart = ({testData}) => {  

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
      label: '# of Votes',
      data: scoreData.map(enKolonne => enKolonne.score),
      borderWidth: 1
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
      <div style={{ width: "800px", height: "500px" }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};


export default SingelChart;
  