// import React from "react";
// import { Nav, Navbar } from "react-bootstrap";
// import { NavLink } from "react-router-dom";

// const Header = () => {
//   return (
//     <>
//       <Navbar bg="dark" variant="dark">
//         <Navbar.Brand>ExcelVisual</Navbar.Brand>
//         <Nav className="me-auto">
//           <NavLink>BarChart</NavLink>
//           <NavLink>PieChart</NavLink>
//           <NavLink>LineChart</NavLink>
//         </Nav>
//       </Navbar>
//     </>
//   );
// };

// export default Header;


import React from 'react';
import {
  MDBNavbar,
  MDBBtn,
  MDBContainer
} from 'mdb-react-ui-kit';

export default function Header() {
  return (
    <MDBNavbar light bgColor='info' >

      
      <MDBContainer tag="form" fluid className='justify-content-start'>

      <button type="button" class="btn btn-dark"     style={{marginLeft:"10px"}}>PieChart</button> 
       <button type="button" class="btn btn-dark"  style={{marginLeft:"10px"}}>BarChart</button>
       <button type="button" class="btn btn-dark"  style={{marginLeft:"10px"}}>Piechart</button>


       
        {/* <MDBBtn outline color="dark" className='text-right' type='button'>
          BarChart

          
        </MDBBtn>
      

        <MDBBtn outline color="success" className='me-2' type='button'>
          LineChart
        </MDBBtn>
        <MDBBtn outline color="success" className='me-2' type='button'>
          PieChart
        </MDBBtn>


        <MDBBtn outline color="secondary" size="sm" type='button'>
          Smaller button
        </MDBBtn> */}
        
      </MDBContainer>
    </MDBNavbar>

// <MDBNavbar expand='lg' dark bgColor='dark'>
//         <MDBContainer fluid>
//           <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
//           <MDBNavbarToggler
//             type='button'
//             data-target='#navbarColor02'
//             aria-controls='navbarColor02'
//             aria-expanded='false'
//             aria-label='Toggle navigation'
//             onClick={() => setShowNavColorSecond(!showNavColorSecond)}
//           >
//             <MDBIcon icon='bars' fas />
//           </MDBNavbarToggler>
//           <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
//             <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
//               <MDBNavbarItem className='active'>
//                 <MDBNavbarLink aria-current='page' href='#'>
//                   Home
//                 </MDBNavbarLink>
//               </MDBNavbarItem>
//               <MDBNavbarItem>
//                 <MDBNavbarLink href='#'>Features</MDBNavbarLink>
//               </MDBNavbarItem>
//               <MDBNavbarItem>
//                 <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
//               </MDBNavbarItem>
//               <MDBNavbarItem>
//                 <MDBNavbarLink href='#'>About</MDBNavbarLink>
//               </MDBNavbarItem>
//             </MDBNavbarNav>
//           </MDBCollapse>
//         </MDBContainer>
//       </MDBNavbar>
  );
}



import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
  MDBInputGroup
} from 'mdb-react-ui-kit';

export default function App() {
  const [showNavNoToggler, setShowNavNoToggler] = useState(false);

  return (
    <>
      <MDBNavbar expand='lg' darka bgColor='dark'    className='text-white '>
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo01'
            aria-controls='navbarTogglerDemo01'
            aria-expanded=''
            aria-label='Toggle navigation'
            onClick={() => setShowNavNoToggler(!showNavNoToggler)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavNoToggler}>
            <MDBNavbarBrand href='#'>Hidden brand</MDBNavbarBrand>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Link</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                  Disabled
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
              <input className='form-control' placeholder="Type query" aria-label="Search" type='Search' />
              <MDBBtn outline>Search</MDBBtn>
            </MDBInputGroup>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}