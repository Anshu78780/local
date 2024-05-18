import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css';

function Header() {
    // State variable to track the current mode
    const [darkMode, setDarkMode] = useState(false);

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        // Toggle dark mode state
        setDarkMode(!darkMode);
        
        // Toggle dark mode class on body element
        document.body.classList.toggle('dark-mode');
    };

    return (
     <>
     <div className={`how-section1 ${darkMode ? 'dark-mode' : ''}`}>
         {/* Dark mode button */}
{/*          <button type="button" onClick={toggleDarkMode} className={`btn btn-dark ${darkMode ? 'dark-mode-button-dark' : 'dark-mode-button-light'}`}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button> */}

         <div className="row">
             <div className="col-md-6 how-img">
                 <img src="https://images.ctfassets.net/c5bd0wqjc7v0/5oEZBTPlhzKLA5OrNpRmsl/5164ee267cc2942f22b8cff329f933fb/hero_3x.png?fm=webp&q=100&w=1180" alt="Intro Image" />
             </div>
             <div className="col-md-6">
                 <h2>The future of money is here</h2>
                 <p className="text">We're the most trusted place for people and businesses to buy, sell, and manage crypto.</p>
                 <div className="button">
                     <Link to="/registration"> 
                         <button type="button" className="btn btn-primary">Registration</button>
                     </Link>
                     <Link to="/partner"> 
                         <button type="button" className="btn btn-primary"> &ensp; Partner &ensp; </button>
                     </Link>
                 </div>
             </div>
         </div>
     </div>
     </>
    );
}

export default Header;
