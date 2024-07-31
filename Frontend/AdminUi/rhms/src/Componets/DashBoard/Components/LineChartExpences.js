import React from 'react';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { ExpencesData } from './ExpencesData';

ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
);

function LineChartExpences() {
  const options = {};
  
  return (
    <Line options={options} data={ExpencesData} width={967.86} height={270} />
  );
}

export default LineChartExpences;
