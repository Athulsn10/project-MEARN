import React from 'react'
import AddProject from './AddProject'

function MyProjects() {
  return (
    <>
    <div className='mt-5 pt-3 ms-3'>
        <h2>Welcome User</h2>
    </div>
    <div className='rounded shadow ms-3 px-3 py-3' style={{backgroundColor:'#f0f0f0'}}>
        <div className='d-flex justify-content-between mt-3'>
            <h2>My Projects</h2>
            <div className='ms-auto mb-3'><AddProject/></div>
        </div>
        <div style={{backgroundColor:'white'}} className='rounded p-2 d-flex align-items-center'>
           <h4>Project title</h4>
            <div className='ms-auto'>
                <button className='btn p-2'><i className="fs-2 fa-brands fa-github"></i></button>
                <button className='btn p-2'><i className="fs-2 fa-regular fa-pen-to-square"></i></button>
                <button className='btn p-2'><i className="fs-2 fa-solid fa-trash"></i></button>
            </div>
        </div>
        <p className='text-danger fw-bolder fs-4'>No Projects Yet</p>
    </div>
   
    </>
  )
}

export default MyProjects