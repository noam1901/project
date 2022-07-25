import React, { useState } from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

const Nav2 = () => {
  const [logedIn, setLogedIn] = useState(false)
  return (
    <Router>
    <Navbar id="navbar" bg="light" expand="lg" className="header">
    <Navbar.Brand className="header__title">Noam Shop :)</Navbar.Brand>
    <span className="header__title"> Stam Shop</span>
    <div className="header__pages__content">
      <Nav.Link>
        <Link className="header__page" to="/">
          Home
        </Link>
      </Nav.Link>
      <Nav.Link>
        <Link className="header__page" to="/collection">
          Categories
        </Link>
      </Nav.Link>
      <Nav.Link>
        <Link className="header__page" to="/clicker">
          Cart
        </Link>
      </Nav.Link>
    </div>
    <Nav.Link>
      <Link to="/temp">{!logedIn? 'Sign Up': 'My Account'}</Link>
    </Nav.Link>
    <Nav.Link>
      <Link to="/temp">{!logedIn? 'Log In': 'Log Out'}</Link>
    </Nav.Link>
    <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
  </Navbar>
  </Router>
  );
};
export default Nav2;