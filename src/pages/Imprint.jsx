import React from 'react';
import './Footer.css';

const Imprint = () => {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <h1 className="footer-title">Imprint</h1>
        <div className="footer-details">
          <p>
            <strong>LocalKiez GmbH</strong><br/>
            Hauptstraße 1<br/>
            10115 Berlin<br/>
            <strong>Email:</strong> contact@localkiez.com<br/>
            <br/>
            <strong>Registration number:</strong> ABC 123446<br/>
            <strong>Register court:</strong> AG Charlottenburg<br/>
            <br/>
            <strong>VAT ID number:</strong> DE1122334455<br/>
            <br/>
            <strong>Managing Directors:</strong> Magdalena Korgul, Katrin Winnen<br/>
            (Responsible for content according to § 18 Abs. 2 MStV)
            <br/>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Imprint;
