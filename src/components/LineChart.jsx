import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ data, handleColorChange }) => {
  return (
    <>
      <Line data={data} onChange={handleColorChange} />
    </>
  );
};

export default LineChart;
