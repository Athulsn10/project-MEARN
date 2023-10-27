import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
        <Navbar className="bg-body-tertiary">
        <Container>
         <Link to={'/'} style={{textDecoration:'none'}}> <Navbar.Brand href="#home">Project Fair</Navbar.Brand></Link>
        </Container>
      </Navbar>
    </>
  )
}

export default Header