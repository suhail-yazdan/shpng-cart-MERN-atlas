import React from 'react'
import "./styles/myAccount.css"

const MyAccount = () => {
  return (
    <div className='account-container d-flex justify-content-center align-items-center'>
      <div className="bg-white w-75 rounded-4 shadow-lg p-5">
        <h1 >My Account</h1>

        <div className="row mt-4">
          <div className='col-4'>
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Email:</strong> john.doe@example.com</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Marital Status:</strong> Married</p>
            <p><strong>Birthdate:</strong> January 1, 1990</p>
          </div>
            
          <div className='col-8'>
            <p><strong>Membership:</strong> Gold</p>
            <p><strong>Job Status:</strong> Assistant Professor</p>
            <p><strong>Address:</strong> 123, Main Street, Shanti Nagar, Bangalore</p>
            <p><strong>Workplace:</strong> R V College, Jayanagara 9th Block, Bangalore</p>
          </div>
        </div>

        <h2 className='my-4'>My Interests</h2>

        <div className="interests">
            <button className='btn me-3 mb-3'>Photography</button>
            <button className='btn me-3 mb-3'>Digital Art </button>
            <button className='btn me-3 mb-3'>Blogging and Writing</button>
            <button className='btn me-3 mb-3'>Learning New Technologies</button>
            <button className='btn me-3 mb-3'>Fitness and Sports</button>
            <button className='btn me-3 mb-3'>Traveling</button>
            <button className='btn me-3 mb-3'>DIY Projects</button>
            <button className='btn me-3 mb-3'>Environmental Sustainability</button>
        </div>
        
        <a href="/" className="btn btn-edit btn-lg mt-4">Edit Account</a>
      </div>
    </div>
  )
}

export default MyAccount