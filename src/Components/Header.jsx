import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header({insideDashboard}) {
  return (
    <>
        <Navbar fixed="top" className="bg-body-tertiary">
        <Container>
         <Link to={'/'} style={{textDecoration:'none'}}> <Navbar.Brand href="#home">Project Fair</Navbar.Brand></Link>

       {  insideDashboard == true &&
          <button className='btn'>Logout</button>
       }
        
        </Container>
      </Navbar>
    </>
  )
}

export default Header