import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Phone from "../assets/Phone.svg";

const Header = () => {
 return (
  <>
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
     <Navbar.Brand>
      <Link to="/" className="text-decoration-none  text-white">
       PERMAUNT
      </Link>
     </Navbar.Brand>
     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
     <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto"></Nav>
      <Nav>
       <Nav.Link className="mx-1">
        <Link to="/" className="text-decoration-none  text-white">
         +769 586 4558
        </Link>
       </Nav.Link>
       <Nav.Link className="mx-1">
        <Link to="#" className="text-decoration-none  text-white">
         service@openauto.cs
        </Link>
       </Nav.Link>
       <Nav.Link
        href="/"
        as={Button}
        variant="outline-success"
        className="mx-1 bg-dark ">
        Download the App
       </Nav.Link>
      </Nav>
     </Navbar.Collapse>
    </Container>
   </Navbar>
  </>
 );
};

export default Header;
