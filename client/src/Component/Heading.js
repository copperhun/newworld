import React  from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import sunlogo from '../assets/sun.svg'

function Heading() { 

  return (
    <Navbar bg='dark' expand="lg" variant='dark'  >
      <Container>        
        <Navbar.Brand href="/home">
            <img
              alt=""
              src={sunlogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            TotheSun
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">          
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/upload">Upload</Nav.Link>
            <Nav.Link href="/">List</Nav.Link>   
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
          

       




        

   
  );
}

export default Heading