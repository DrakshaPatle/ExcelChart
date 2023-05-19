import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const BarChart = ({ data, handleColorChange }) => {
  return <Bar data={data} onChange={handleColorChange} />;
};

export default BarChart;
