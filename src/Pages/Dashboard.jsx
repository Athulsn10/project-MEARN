import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Row, Col } from 'react-bootstrap'
import Profile from '../Components/Profile'
import MyProjects from '../Components/MyProjects'


function Dashboard() {
  const [username,setUsername] = useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("exisingUser")){
      setUsername(JSON.parse(sessionStorage.getItem("exisingUser")).username)
    }
  },[])
  return (
    <>
    <Header insideDashboard/>
    <Row className='container-fluid mt-5'>
      <Col sm={12} md={8}> 
      <div className='mt-5 pt-3 ms-3 mb-3'>
        <h2>Welcome {username}</h2>
      </div>
      <MyProjects/>
      </Col>
      <Col className='mt-5' sm={12} md={4}>
      <Profile/>
      </Col>
    </Row>
    </>
  )
}

export default Dashboard