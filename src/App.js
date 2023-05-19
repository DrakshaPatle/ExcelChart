// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import { Route, Routes } from 'react-router-dom';
import './App.css';
import ExcelChart from './components/AllChart';
import Header from './components/Navbar';
import Piechart from './components/Piechart';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';

function App() {
  return (
    <>
    <Header/>
      <ExcelChart />

       <Routes>
        <Route path="/piechart" element={<Piechart />} />
        <Route path="/linechart" element={<LineChart />} />
        <Route path="/barchart" element={<BarChart />} />
      </Routes>
    </>
  );
}

export default App;
