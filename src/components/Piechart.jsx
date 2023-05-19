import React from "react";
import { Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

// const Piechart = ({ data, handleColorChange }) => {
//   return (
//     <>
//       <Pie data={data} onChange={handleColorChange} />
//     </>
//   );
// };

// export default Piechart;
const Piechart = ({ data, selectedColor }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        ...data.datasets[0],
        backgroundColor: [selectedColor],
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default Piechart;