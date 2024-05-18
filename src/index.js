import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RegistrationForm from './pages/RegistrationForm';
import KYCPage from './pages/KYCPage';
import TestComponent from './pages/TestComponent';
import Dashboard from './components/admin/Dashboard';
import {
  createBrowserRouter,

  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },{
    path: "/registration",
    element: <RegistrationForm/>
  },{
    path: "/kyc",
    element: <KYCPage/>
  },{
    path: "/userpanel",
    element: <TestComponent/>
  },{
    path: "/partner",
    element: <Dashboard/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
