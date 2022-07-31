import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav} from 'react-bootstrap';
const Header = () => {
  return(
    <Navbar bg="dark" variant="dark">
      <Container className="">
        <Link className="navbar-brand" to="/">Billing &amp; Payment System</Link>
        <Nav className="me-auto">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="new_plan">Add Plan</Link>
          <Link className="nav-link" to="plans">Plans</Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header;
