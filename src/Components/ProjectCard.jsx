import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { Col, Row, Button } from "react-bootstrap";

function ProjectCard() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card
        onClick={handleShow}
        style={{ border: "none" }}
        className="shadow-sm mb-4 btn mt-4"
      >
        <Card.Img variant="top" src="./img/beki.png" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="img-fluid" src="./img/beki.png" />
          <h2>Nike Webpage Clone</h2>
          <p>
            <i className="icon fa-brands ps-1 fs-2 fa-html5"></i>
            <i className="icon fa-brands ps-1 fs-2 fa-css3-alt"></i>
            <i className="icon fa-brands ps-1 fs-2 fa-bootstrap"></i>
          </p>
          <p>
            Project Overview: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Laudantium laborum, ad maiores atque obcaecati quis nobis est
            quibusdam accusantium culpa doloremque. Sed repudiandae dolores,
            maiores adipisci facere ducimus quis culpa?
          </p>
          <p>
            <Button className="btn-primary m-0 px-5">
              <a href="https://github.com/Athulsn10/Beki-parallax" target="_blank">
                <i
                  className="fs-1 fa-brands fa-github"
                  style={{ color: "#ffffff" }}
                ></i>
              </a>
            </Button>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectCard;
