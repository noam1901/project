import React, { useState } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom'


const Nav2 = () => {
  const [logedIn, setLogedIn] = useState(false)
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Link to="/">NoamShop</Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">products</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Nav>
          {logedIn?<Nav.Link href="#deets">my account</Nav.Link>:<Nav.Link href="#deets">Login</Nav.Link> }
          {logedIn?<Nav.Link href="#deets">Sign Out</Nav.Link>:<Link to="/Register">Register</Link> }
          <Link to="/cart">
            Cart
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};
export default Nav2;