import React, { useState } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom'
import { Button, Form } from 'react-bootstrap';

const Nav2 = (props) => {
  let id = 1 
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
          {props.loggedIn? <Link to={'/MyAccount/'+id} className='nav-link'>My Account</Link> 
          :         <Link to='/Login' className='nav-link'>Login</Link> }
          {props.loggedIn? <><Link to="/cart" className='nav-link'>Cart</Link>
                      <Link to="/blabla" className='nav-link'>log out</Link></> : 
                    <Link to="/Register" className='nav-link'>Register</Link> }
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