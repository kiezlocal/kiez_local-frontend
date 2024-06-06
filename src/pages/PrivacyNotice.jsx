import React from 'react';
import './Footer.css'; // Importing the CSS file for styling

const PrivacyNotice = () => {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <h1 className="footer-title">Privacy Notice</h1>
        <div className="footer-details">
          <p>
            At LocalKiez, we take your privacy very seriously. This Privacy Notice outlines the types of personal information we collect and receive, how it is used, and the steps we take to safeguard it.
          </p>
          <br />
          <h2>Information Collection and Use</h2>
          <p>
            We may collect personal information when you visit our website, sign up for our services, or interact with us in any way. This information may include your name, email address, mailing address, phone number, and other details you provide voluntarily.
          </p>
          <br />
          <h2>Use of Cookies</h2>
          <p>
            We use cookies to improve your experience on our website. Cookies are small text files that are placed on your computer or mobile device by websites you visit. They are widely used to make websites work more efficiently and to provide information to website owners.
          </p>
          <br />
          <h2>Information Sharing and Disclosure</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent. However, we may share your information with trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.
          </p>
          <br />
          <h2>Data Security</h2>
          <p>
            We take appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.
          </p>
          <br />
          <h2>Changes to This Privacy Notice</h2>
          <p>
            We reserve the right to update or change our Privacy Notice at any time. Any changes will be posted on this page, and the date of the most recent update will be indicated at the top of the page.
          </p>
          <br />
          <h2>Contact Us</h2>
          <p>
            If you have any questions or concerns about our Privacy Notice, please contact us at contact@localkiez.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyNotice;
