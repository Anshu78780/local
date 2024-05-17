import React from 'react';
import './Footer.css';

function Footer() {
    return (
      <>
       <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: example@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
      </div>
    </footer>
      </>
    );
  }
  
  export default Footer;
