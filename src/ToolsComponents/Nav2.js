import React, { useState } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Nav2 = () => {
  const [logedIn, setLogedIn] = useState(true)
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">NoamShop</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">products</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Nav>
          {logedIn?<Nav.Link href="#deets">my account</Nav.Link>:<Nav.Link href="#deets">Login</Nav.Link> }
          {logedIn?<Nav.Link href="#deets">Sign Out</Nav.Link>:<Nav.Link href="#deets">Register</Nav.Link> }
          <Nav.Link href="#memes">
            Cart
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};
export default Nav2;