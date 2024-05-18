import React from 'react';
import './TestComponent.css'

const TestComponent = () => {
  
  return (
    <>
   <div className="user-panel">
      <div className="user-panel-header">
        <h2>Welcome Back, John Doe!</h2>
        <p>Here's what's happening with your account:</p>
      </div>
      <div className="user-panel-content">
        <div className="user-panel-item">
          <h3>Recent Activity</h3>
          <ul>
            <li>Logged in 2 hours ago</li>
            <li>Updated profile picture</li>
            <li>Completed task: Update account settings</li>
          </ul>
        </div>
        <div className="user-panel-item">
          <h3>Account Details</h3>
          <ul>
            <li>Name: John Doe</li>
            <li>Email: johndoe@example.com</li>
            <li>Subscription: Premium</li>
            <li>Next Billing Date: May 25, 2024</li>
          </ul>
        </div>
        <div className="user-panel-item">
          <h3>Actions</h3>
          <ul>
            <li><button>Edit Profile</button></li>
            <li><button>Change Password</button></li>
            <li><button>Upgrade Subscription</button></li>
            <li><button>Logout</button></li>
          </ul>
        </div>
      </div>
    </div>
  
    </>
  );
}


export default TestComponent;
