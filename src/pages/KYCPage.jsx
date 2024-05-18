import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './KYCPage.css';

const KYCPage = () => {
  const [selectedDocument, setSelectedDocument] = useState('');
  const [uniqueNumber, setUniqueNumber] = useState('');
  const [userName, setUserName] = useState('');
  const [userIdImage, setUserIdImage] = useState(null);
  const [userImage, setUserImage] = useState(null);

  const handleDocumentChange = (event) => {
    setSelectedDocument(event.target.value);
    setUniqueNumber('');
  };

  const handleUniqueNumberChange = (event) => {
    setUniqueNumber(event.target.value);
  };

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleUserIdImageUpload = (event) => {
    const file = event.target.files[0];
    setUserIdImage(file);
  };

  const handleUserImageUpload = (event) => {
    const file = event.target.files[0];
    setUserImage(file);
  };

  const isFormValid = () => {
    return selectedDocument && uniqueNumber && userName && userIdImage && userImage;
  };

  const handleVerify = () => {
    if (!isFormValid()) {
      alert('Please fill all fields before verification.');
      return;
    }
    // Proceed to user panel/dashboard
  };

  return (
    <div className="kyc-container">
      <h1>KYC Verification</h1>
      <label htmlFor="choose-document">Choose Document:</label>
      <select id="choose-document" value={selectedDocument} onChange={handleDocumentChange}>
        <option value="">Select Document</option>
        <option value="Aadhar Card">Aadhar Card</option>
        <option value="Passport">Passport</option>
        <option value="Voter ID Card">Voter ID Card</option>
        <option value="PAN Card">PAN Card</option>
      </select>

      {selectedDocument === 'Aadhar Card' && (
        <div className="additional-fields">
          <label htmlFor="aadhar-number">Aadhar Number:</label>
          <input type="text" id="aadhar-number" value={uniqueNumber} onChange={handleUniqueNumberChange} />
        </div>
      )}

      {selectedDocument === 'PAN Card' && (
        <div className="additional-fields">
          <label htmlFor="pan-number">PAN Number:</label>
          <input type="text" id="pan-number" value={uniqueNumber} onChange={handleUniqueNumberChange} />
        </div>
      )}

      {selectedDocument === 'Passport' && (
        <div className="additional-fields">
          <label htmlFor="passport-number">Passport Number:</label>
          <input type="text" id="passport-number" value={uniqueNumber} onChange={handleUniqueNumberChange} />
        </div>
      )}

      <label htmlFor="user-name">Your Name:</label>
      <input type="text" id="user-name" value={userName} onChange={handleNameChange} />

      <div className="image-upload">
        <label htmlFor="upload-user-image">Upload User Image:</label>
        <input type="file" id="upload-user-image" accept="image/*" onChange={handleUserImageUpload} />
      </div>

      <div className="image-upload">
        <label htmlFor="upload-id-image">Upload ID Image:</label>
        <input type="file" id="upload-id-image" accept="image/*" onChange={handleUserIdImageUpload} />
      </div>

      <Link to={isFormValid() ? "/userpanel" : "#"}>
        <button type="button" className={`btn btn-primary ${isFormValid() ? "" : "disabled"}`} onClick={handleVerify}>Verify</button>
      </Link>

      {userImage && (
        <div className="preview-container">
          <h2>User Image Preview:</h2>
          <img src={URL.createObjectURL(userImage)} alt="User's Uploaded Image" />
        </div>
      )}

      {userIdImage && (
        <div className="preview-container">
          <h2>ID Image Preview:</h2>
          <img src={URL.createObjectURL(userIdImage)} alt="ID Uploaded Image" />
        </div>
      )}
    </div>
  );
};

export default KYCPage;
