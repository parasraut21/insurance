import 'bootstrap/dist/css/bootstrap.min.css';
import './Nabvar_.css'
import React, { useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();
  const [showServices, setShowServices] = useState(false);
  const [dropdownId, setDropdownId] = useState(null);

  const handleServicesMouseEnter = (e, id) => {
    setDropdownId(id);
    setShowServices(true);
  }

  const handleServicesMouseLeave = (e, id) => {
    setDropdownId(null);
    setShowServices(false);
  }

  const isDropdownOpen = (id) => {
    return showServices && dropdownId === id;
  }

  return (
      <>
          
 

    <Navbar bg="warning" expand="lg">
      <Navbar.Brand  style={{ fontSize: '1.2rem', marginRight: '0.2rem' ,marginLeft: '4rem'}} ><Link to="/">
      Insurance</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" style={{ marginLeft: '8rem' }}>
          <NavDropdown 
            title="Health" 
            id="health-nav-dropdown"
            show={isDropdownOpen('health-nav-dropdown')}
            onMouseEnter={(e) => handleServicesMouseEnter(e, 'health-nav-dropdown')}
            onMouseLeave={(e) => handleServicesMouseLeave(e, 'health-nav-dropdown')}
            style={{ fontSize: '1.2rem', marginRight: '7rem' }}
          >
        <NavDropdown.Item >   <Link to="/indivi">Individual health insurance</Link></NavDropdown.Item>
            <NavDropdown.Item href="#"><Link to="/grp">Group health insurance</Link></NavDropdown.Item>
            <NavDropdown.Item href="#"><Link to="/st">Short-term health insurance</Link></NavDropdown.Item>
            <NavDropdown.Item href="#"><Link to="/lt">Long-term health insurance</Link></NavDropdown.Item>
          </NavDropdown>
          <NavDropdown 
            title="Motor" 
            id="motor-nav-dropdown"
            show={isDropdownOpen('motor-nav-dropdown')}
            onMouseEnter={(e) => handleServicesMouseEnter(e, 'motor-nav-dropdown')}
            onMouseLeave={(e) => handleServicesMouseLeave(e, 'motor-nav-dropdown')}
            style={{ fontSize: '1.2rem', marginRight: '7rem' }}
          >
            <NavDropdown.Item href="#">Bike Insurance</NavDropdown.Item>
            <NavDropdown.Item href="#">Car Insurance</NavDropdown.Item>
           
          </NavDropdown>
          <NavDropdown 
            title="Education" 
            id="education-nav-dropdown"
            show={isDropdownOpen('education-nav-dropdown')}
            onMouseEnter={(e) => handleServicesMouseEnter(e, 'education-nav-dropdown')}
            onMouseLeave={(e) => handleServicesMouseLeave(e, 'education-nav-dropdown')}
            style={{ fontSize: '1.2rem', marginRight: '7rem' }}
          >
            <NavDropdown.Item href="#">Child Plans</NavDropdown.Item>
            <NavDropdown.Item href="#">Money-Back Plans</NavDropdown.Item>
            <NavDropdown.Item href="#">Savings Plans</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown 
            title="Home" 
            id="home-nav-dropdown"
            show={isDropdownOpen('home-nav-dropdown')}
            onMouseEnter={(e) => handleServicesMouseEnter(e, 'home-nav-dropdown')}
            onMouseLeave={(e) => handleServicesMouseLeave(e, 'home-nav-dropdown')}
            style={{ fontSize: '1.2rem', marginRight: '7rem' }}
          >
            <NavDropdown.Item href="#">Property coverage</NavDropdown.Item>
            <NavDropdown.Item href="#">Liability coverage</NavDropdown.Item>
            <NavDropdown.Item href="#">Additional living expenses</NavDropdown.Item>
          </NavDropdown>
            <Nav.Link href="#" style={{ color: 'white', fontSize: '1.2rem', marginRight: '1rem' }}>About</Nav.Link>
            <Nav.Link href="#" style={{ color: 'white', fontSize: '1.2rem', marginRight: '3rem' }}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </>
    );
  }
  
  export default NavBar;