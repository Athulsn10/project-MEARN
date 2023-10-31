import React from 'react'
import Header from '../Components/Header'
import { Row, Col } from 'react-bootstrap'
import Profile from '../Components/Profile'
import MyProjects from '../Components/MyProjects'


function Dashboard() {
  return (
    <>
    <Header insideDashboard/>
    <Row className='container-fluid mt-5'>
      <Col sm={12} md={8}> 
      <MyProjects/>
      </Col>
      <Col sm={12} md={4}>
      <Profile/>
      </Col>
    </Row>
    </>
  )
}

export default Dashboard