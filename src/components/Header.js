import React from 'react'
import { Navbar, Nav, Container} from "react-bootstrap";

const Header = () => {
  return <header>
    
      <Navbar bg="info" variant='info' expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/logo.svg"
              width="50"
              height="50"
              className="d-inline-block align-center"
            />{' '}
            SENTIDOS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            
          <Nav className="ml-auto">
            <Nav.Link href="/nosotros">NOSOTROS</Nav.Link>
            <Nav.Link href="/consultas">CONSULTAS</Nav.Link>
            <Nav.Link href="/listaconsultas">LISTA CONSULTAS</Nav.Link>
          </Nav>
           
        </Navbar.Collapse>
        </Container>
      </Navbar>
         </header>
  
}

export default Header