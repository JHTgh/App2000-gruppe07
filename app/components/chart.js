import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

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
      {
        label: "Personlighet",
        data: [65, 59, 80, 81, 56],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
        barThickness: 30,
        maxBarThickness: 50,
      },
      {
        label: "Personlighet",
        data: [55, 25, 70, 62, 45],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
        barThickness: 30,
        maxBarThickness: 50,
      },
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
    <div style={{ width: "1000px", height: "500px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
