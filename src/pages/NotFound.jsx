import React from 'react';
import './Footer.css'; // Importing the CSS file for styling

const NotFound = () => {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <h1 className="footer-title">404 - Not Found</h1>
        <div className="footer-details">
          <p>We couldn't find the page you're looking for.</p>
          <br />
          <p>Please check the URL or go back to the <a href="/">homepage</a>.</p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
