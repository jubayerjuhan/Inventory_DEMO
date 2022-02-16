import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({ labels, title, data }) {
  const datas = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],

        borderWidth: 1,
      },
    ],
  };
  return (
    <div style={{ width: 500, maxHeight: 600, paddingTop: 50 }}>
      <h3>{title}</h3>
      <Doughnut data={datas} />
    </div>
  );
}
