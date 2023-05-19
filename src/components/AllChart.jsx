import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { Bar } from "react-chartjs-2";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
// import Piechart from "./Piechart";
import UserData from "./Data";
import { Card, Form } from "react-bootstrap";
import { Colors } from "chart.js";
import { Line, Pie } from "react-chartjs-2";

import { SketchPicker, BlockPicker } from "react-color";
const ExcelChart = () => {
  const [chartData, setChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState({lables:[],datasets:[],});
  let predefinedColors = [];
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const [colorPickerColor, setColorPickerColor] = useState("#000000");
  const [colorsToShow, setColorsToShow] = useState([]);




  const handleChangeColor = (index)=>{
    console.log("----")
    console.log(colorsToShow)
    setColorPickerOpen(true)
    let colors = colorsToShow
    
    colors[index-1] = colorPickerColor
    setColorsToShow(colors);
    console.log(colorsToShow)
  }
  
  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      const lables = parsedData.map((row)=>row.__EMPTY) ;
      const numericData = parsedData.map((row)=>row.__EMPTY_1);



      for (let index = 0; index < numericData.length; index++) {
        let newcol = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
        predefinedColors.push(newcol)
      }
      setColorsToShow(predefinedColors)

      const extractedPieChartData = {
        lables : predefinedColors,
        datasets : [
          {
            label : "SABKUCH",
            data : numericData,
            backgroundColor : predefinedColors,
            hoverOffset : 4
          }
        ]
      }
      setPieChartData(extractedPieChartData)

      setChartData(parsedData);
      // console.log(parsedData)
    };
  };

 
  const [selectedColor, setSelectedColor] = useState("");

 
  
  // const [data, setData] = useState({
  //   // labels: UserData.map((data) => data.__EMPTY),
  //   labels: [],
  //   datasets: [
  //     {
  //       label: "Excel-Data",
  //       data: chartData, //array of values only
  //       backgroundColor: predefinedColors,
  //       border: "none",
  //       borderWidth: 2,
  //     },
  //   ],
  // });


  // const updatedData = {
  //   ...data,
  //   datasets: [
  //     {
  //       ...data.datasets[0],
  //       backgroundColor: [selectedColor],
  //     },
  //   ],
  // };
  // setData(updatedData);

  // useEffect(() => {
  //   const updatedData = {
  //     ...data,
  //     labels: chartData.map((data) => data.__EMPTY),
  //     datasets: [
  //       {
  //         ...data.datasets[0],
  //         data: chartData.map((data) => data.__EMPTY_1),
  //       },
  //     ],
  //   };
  //   setData(updatedData);
  // }, [chartData]);



 
  return (
    <>  

    <div >
      <h2 className="text-center">EXCEL CHART DATA</h2>
      {/* <input type="file" onChange={handleFileUpload} /> */}{" "}
      <div  style={{marginLeft:"900px"}}>
        <Form.Control
          type="file"
          required
          name="file"
          style={{ width: "10%",marginLeft:"500px" }}
            className="bg-secondary m-2"
            onChange={handleFileUpload}
        />
        </div>
    </div>



    <div  style={{marginLeft:"900px",height:"30px",}}>
  {predefinedColors.map((color, index) => (
    <button
      key={index}
      style={{ backgroundColor: color ,height:"20px",width:"2px" }}
      onClick={() => setSelectedColor(color)}
    ></button>
  ))}
</div>




  <Card className="shadow mt-4" style={{ width: "40%", margin: "auto", border: "none" ,backgroundColor:"  #ffe2bd" }} >
    <h3 className="text-center">PieChart</h3>

      {/* <Piechart data={data} /> */}

      {/* <Piechart data={data} selectedColor={selectedColor} /> */}
      <Pie data = {pieChartData} options={{onClick:(evt, elem)=>{handleChangeColor(elem[0].index)}}}></Pie>
      { colorPickerOpen &&
          <SketchPicker
          onChange={(color) => {
            setColorPickerColor(color.hex);
          }}
          color={colorPickerColor}
        />
      }
  </Card>

  <Card className="shadow mt-4" style={{ width: "50%", margin: "auto", border: "none" , backgroundColor:"  #cdb7b5"}}>
    <h3 className="text-center">LineChart</h3>


    {/* <LineChart data={data} /> */}

    
  </Card>

  <Card className="shadow mt-4" style={{ width: "50%", margin: "auto", border: "none" , backgroundColor:"  #cdb7b5"}}>
    <h3 className="text-center">LineChart</h3>
    {/* <BarChart data={data} /> */}
  </Card>
  </>
  );
};


export default ExcelChart;



// how to start working with colour palette   and how to implemnet it  and now  i  am confused that wherte we are going to addd that contact 

// import React, { useEffect, useState } from "react";
// import * as XLSX from "xlsx";
// import { Bar } from "react-chartjs-2";
// import BarChart from "./BarChart";
// import LineChart from "./LineChart";
// import Piechart from "./Piechart";
// import UserData from "./UserData";
// import { Card, Form } from "react-bootstrap";

// const ExcelChart = () => {
//   const [chartData, setChartData] = useState([]);
//   const [backgroundColor, setBackgroundColor] = useState("green");

//   const handleFileUpload = (e) => {
//     const reader = new FileReader();
//     reader.readAsBinaryString(e.target.files[0]);
//     reader.onload = (e) => {
//       const data = e.target.result;
//       const workbook = XLSX.read(data, { type: "binary" });
//       const sheetName = workbook.SheetNames[0];
//       const sheet = workbook.Sheets[sheetName];
//       const parsedData = XLSX.utils.sheet_to_json(sheet);
//       setChartData(parsedData);
//     };
//   };

//   const handleChangeBackgroundColor = (e) => {
//     setBackgroundColor(e.target.value);
//   };

//   const [data, setData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: "ExcelSheet Data",
//         data: [],
//         backgroundColor: backgroundColor,
//         border: "none",
//         borderWidth: 2,
//       },
//     ],
//   });

//   useEffect(() => {
//     const updatedData = {
//       ...data,
//       labels: chartData.map((data) => data.__EMPTY),
//       datasets: [
//         {
//           ...data.datasets[0],
//           data: chartData.map((data) => data.__EMPTY_1),
//           backgroundColor: backgroundColor,
//         },
//       ],
//     };
//     setData(updatedData);
//   }, [chartData, backgroundColor]);


//   return (
//     <>
//       <div>
//         <h2 className="text-center">EXCEL CHARTS</h2>
//         <Form.Control
//           type="file"
//           required
//           name="file"
//           style={{ width: "20%",  marginTop:"30px"}}
//           className="text-center"
//           className="bg-secondary m-2"
         
//           onChange={handleFileUpload}
//         />


//         <Form.Control
//           type="color"
//           value={backgroundColor}
//           onChange={handleChangeBackgroundColor}
//         />
//       </div>








//       <Card
//         className="shadow mt-4"
//         style={{ width: "70%", margin: "auto", border: "none" , backgroundColor:"lightgrey"}}
//       >
//         <h3 className="text-center">BarChart</h3>
//         <BarChart data={data} />
//       </Card>






//       <Card
//         className="shadow mt-4"
//         style={{ width: "70%", margin: "auto", border: "none" , backgroundColor:"lightgrey"}}
//       >
//         <h3 className="text-center">LineChart</h3>
//         <LineChart data={data} />
//       </Card>







//       <Card
//         className="shadow mt-4"
//         style={{ width: "70%", margin: "auto", border: "none" , backgroundColor:"lightgrey"}}
//       >
//         <h3 className="text-center">PieChart</h3>
//         <Piechart data={data} />
//       </Card>




//     </>
//   );
// };

// export default ExcelChart;
