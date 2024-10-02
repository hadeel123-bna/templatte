import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Assurez-vous que react-router-dom est installé
import './nav.css';

const CustomNav = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">DEV</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="items">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/service" className="nav-link">Service</Link>
          <Link to="/price" className="nav-link">Pricing</Link>
          <Link to="/contact">
            <Button variant="Dark">Contact Us</Button>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNav;
