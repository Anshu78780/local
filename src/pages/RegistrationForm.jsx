import React, { useState } from 'react';
import './RegistrationForm.css';
import { Link } from 'react-router-dom'; 

function RegistrationForm() {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobileNumber: '' // Adding mobile number field to initial form data
  };

  const [formData, setFormData] = useState(initialFormData);
  const [registered, setRegistered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle Data
    console.log(formData);
   
    setRegistered(true);
    
    setFormData(initialFormData);
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Link to="/kyc"> 
            <button type="button" className="btn btn-primary">Next</button>
          </Link>
     
        </div>
       
      </form>
    </>
  );
}

export default RegistrationForm;
