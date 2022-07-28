import React, { useState } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom'
import { Button, Form } from 'react-bootstrap';

const Nav2 = () => {
  const [logedIn, setLogedIn] = useState(true)
  let id = 1 // בנתיים
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Link to="/" >NoamShop</Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link to='/products' className='nav-link'>products</Link>
        </Nav>
        <Nav>
          {logedIn?<Link to={'/MyAccount/'+id} className='nav-link'>my account</Link>:<Link to='/Login' className='nav-link'>Login</Link> }
          {logedIn?<Link to="/" className='nav-link'>Sign Out</Link>:<Link to="/Register" className='nav-link'>Register</Link> }
          <Link to="/cart" className='nav-link'>
            Cart
          </Link>
        </Nav>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};
export default Nav2;