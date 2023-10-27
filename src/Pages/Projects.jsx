import React from "react";
import Header from "../Components/Header";
import ProjectCard from "../Components/ProjectCard";
import { Row, Col } from "react-bootstrap";

function Projects() {
  return (
    <>
      <Header />
      <h2 className="text-center" style={{marginTop:'90px'}}>All Projects</h2>
      {/* search */}
      <div className="d-flex align-items-center justify-content-center mt-4">
        <div className="d-flex w-50 position-relative">
          <input type="search" placeholder="Search Category" className="form-control me-1"/>
          <button className="btn position-absolute end-0" style={{ top: "50%", transform: "translateY(-50%)" }}>
            <i className="fs-3 fa-solid fa-magnifying-glass" style={{ color: "#000000" }}></i>
          </button>
        </div>
      </div>
      {/* card */}
      <Row className="mt-5 container-fluid">
        <Col md={6} lg={4}>
          <ProjectCard />
        </Col>
      </Row>
    </>
  );
}

export default Projects;
