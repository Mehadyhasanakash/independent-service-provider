import React from 'react';
import {  Container,  Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
       <div className='bg-light'>
            <Navbar className='container' bg="light" sticky='top' expand={false}>
  <Container fluid>
    <Navbar.Brand as={Link} to="/">Love logo</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/Service">Service</Nav.Link>
          <Nav.Link as={Link} to="/checkout">Check-out</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          <NavDropdown title="Other" id="offcanvasNavbarDropdown">
            <NavDropdown.Item as={Link} to="/blog">Blog</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/about">About</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
       </div>
    );
};

export default Header;