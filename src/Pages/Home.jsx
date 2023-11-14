import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'
import { Link } from 'react-router-dom'

function Home() {
  const [loggedin,setLoggedin]=useState()
  useEffect(()=>{
    if(sessionStorage.getItem('token')){
      setLoggedin(true)
    }else{
      setLoggedin(false)
    }
  })
  return (
    <>
    {/* landing section */}
    <div style={{width:'100%',height:'100%'}} className='container-fluid rounded'>
      <Row className='align-items-center p-5'>
        <Col sm={12} md={6}>
          <h1 style={{fontSize:'50px'}} className='fw-bold'>Project Fair</h1>
          <p>
          "Welcome to our Project Fair website, where innovation meets opportunity! Our platform is designed to seamlessly connect creators and enthusiasts from various fields. Explore a diverse range of projects, from cutting-edge technology to artistic masterpieces. You can easily showcase your project, whether it's a science experiment, a startup idea, or a stunning art piece. Interact with fellow participants through a robust messaging system, share ideas, and collaborate on exciting ventures. Our website also offers user-friendly registration and submission forms, as well as comprehensive event management tools for administrators. Stay updated with real-time notifications and access detailed project profiles. Join us to celebrate creativity and drive progress in a dynamic virtual fair environment!"<br/>---Dummy paragraph---
          </p>
          
         {loggedin?
          <Link to={'/login'} className='btn btn-primary '>Start To Explore <i className="fa-solid fa-right-long" style={{color: '#ffffff'}}></i></Link> :
          <Link to={'/dashboard'} className='btn btn-primary '>Manage Your Projects<i className="fa-solid fa-right-long" style={{color: '#ffffff'}}></i></Link>
          }

        </Col>
        <Col sm={12} md={6}>
          <img src="fair.jpg" className='img-fluid mt-3'></img>
        </Col>
      </Row>
      <hr/>
    </div>
    {/* project section */}
    <div className="mx-5 all-projects mt-5">
      <h1 className="text-center">Explore Our Projects</h1>
      <Row>
        <Col sm={12} md={6} lg={4}>
          <ProjectCard/>
        </Col>
        <div className="text-center"><Link to={'/projects'} style={{textDecoration:'none'}}>View More Projects<i className="ms-2 fa-solid fa-arrow-up-right-from-square" style={{color: '#000000'}}></i></Link></div>
      </Row>
    </div>
    </>
  )
}

export default Home