import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Charts() {
  const data = {
    labels: [
      0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18
    ],
    datasets: [
      {
        label: 'Dataset',
        data: [4000, 3000, 5000, 6000, 5000, 7000, 4000, 3000, 4000, 5000, 6000, 3000, 5000, 4000, 6000, 7000, 4000, 5000],
        backgroundColor: '#7297fc',
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Activity',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        barPercentage: 0.8,
        categoryPercentage: 0.9,
      },
      y: {
        min: 0,
        suggestedMin: 0.5, // Adjust this value to control the gap from the x-axis
        ticks: {
          beginAtZero: true,
          callback: function(value) {
            if (value >= 1000) {
              return `${(value / 1000).toFixed(0)}k`;
            }
            return value;
          },
          padding: 10, // Adds padding between the ticks and the axis
        },
      },
    },
    layout: {
      padding: {
        top: 10,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
  };

  return (
    <div style={{paddingTop: "10px", paddingBottom: "10px"}}>
      <Bar data={data} options={options} width={250} height={150} />
    </div>
  );
}