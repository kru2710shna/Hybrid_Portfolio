import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap globally

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
