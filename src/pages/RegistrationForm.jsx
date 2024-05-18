import React, { useState } from 'react';
import './RegistrationForm.css';
import { Link } from 'react-router-dom'; 

function RegistrationForm() {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    reenterPassword: '',
    mobileNumber: '' 
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
            placeholder="Enter your first name"
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
            placeholder="Enter your last name"
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
            placeholder="Enter your email address"
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
            placeholder="Enter your mobile number"
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
            placeholder="Enter your password"
            required
          />
        </div>
        <div>
          <label htmlFor="reenterPassword">Re-enter Password:</label>
          <input
            type="password"
            id="reenterPassword"
            name="reenterPassword"
            value={formData.reenterPassword}
            onChange={handleChange}
            placeholder="Re-enter your password"
            required
          />
        </div>
        <div>
          <Link to="/kyc"> 
            <button type="button" className="btn btn-primary">Next</button>
          </Link>
        </div>
      </form>
    </>
  );
}

export default RegistrationForm;
