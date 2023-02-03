import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Crime rate by Months",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Nearby",
      data: [1, 2, 4, 5, 6, 7],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "In the City",
      data: [6, 7, 9, 12, 26],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function BarGraph() {
  return <Bar options={options} data={data} />;
}
