import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddProject() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Button variant="primary" onClick={handleShow}>
      Add Project
    </Button>

    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='row'>
            <div className='col-lg-6'>
                <label>
                   <input type='file' style={{display:'none'}} /> <img src='https://static.wikia.nocookie.net/find-the-markers-roblox/images/5/5f/Placeholder.jpg/revision/latest?cb=20220313030844' className='img-fluid' />
                </label>
               
            </div>
            <div className='col-lg-6'>
                <div className='mb-3'><input type="text" className='form-control' placeholder='project title' /></div>
                <div className='mb-3'><input type="text" className='form-control' placeholder='Language Used' /></div>
                <div className='mb-3'><input type="text" className='form-control' placeholder='Github Link' /></div>
                <div className='mb-3'><input type="text" className='form-control' placeholder='Website Link' /></div>
                <div className='mb-3'><input type="text" className='form-control' placeholder='Project Overview' /></div>
            </div>

        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary">Add</Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default AddProject