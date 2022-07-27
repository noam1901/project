import React, { useState } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom'


const Nav2 = () => {
  const [logedIn, setLogedIn] = useState(false)
  let id = 1 // בנתיים
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Link to="/" >NoamShop</Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link to='ProductsPage' className='nav-link'>products</Link>
          <Link to='/idk' className='nav-link'>Pricing</Link>
        </Nav>
        <Nav>
          {logedIn?<Link to={'/MyAccount/'+id} className='nav-link'>my account</Link>:<Link to='/Login' className='nav-link'>Login</Link> }
          {logedIn?<Link to="/" className='nav-link'>Sign Out</Link>:<Link to="/Register" className='nav-link'>Register</Link> }
          <Link to="/cart" className='nav-link'>
            Cart
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};
export default Nav2;