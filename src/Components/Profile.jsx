import React from 'react'

function Profile() {
  return (
    <div className='card shadow  p-5'>
        <div className='d-flex justify-content-between'>
            <h2>Profile</h2>
            <button style={{border:'none'}} className='btn '><i className="fs-4 fa-solid fa-check" style={{color: '#000000'}}></i></button>
        </div>
        <label className='text-center' htmlFor='profile'>
            <input id='profile' style={{display:'none'}} type='file' />
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5BCWli-SBwSHL9-bjHTSaGEVK1R6KDb3F_A&usqp=CAU' width={'200px'} height={'200px'} className='rounded-circle'/>
        </label>
        <div className='mt-3'>
            <input type='text' className='form-control' placeholder='Github' />
        </div>
        <div className='mt-3'>
        <input type='text' className='form-control' placeholder='Github' />  
        </div>
        <button className='btn btn-danger mt-3'>Update</button>
        
    </div>
  )
}

export default Profile
