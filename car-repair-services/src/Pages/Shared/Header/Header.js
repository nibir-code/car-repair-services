import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import useAuth from "./../../../Hooks/useAuth";


const Header = () => {
  const {user , logOut} = useAuth()
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">Car Repair Services Ltd.</Navbar.Brand>
          <Navbar.Toggle />
          
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">{user?.displayName}</a>
          </Navbar.Text>
        </Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
            <Nav.Link as={Link} to="/home#services">Services</Nav.Link>
            <Nav.Link  as={Link} to="/home#experts">Experts</Nav.Link>
            { user?.email ?
              <Button onClick={logOut} variant="light">Logout</Button> :
              <Nav.Link hr as={Link} to="/login">Login</Nav.Link>}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;