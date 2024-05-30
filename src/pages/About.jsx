import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-headline">About</h1>
      <div className="about-content">
        <p className="about-text">
          Welcome to our event recommendation platform, where you can stay updated on all the exciting happenings in your neighborhood. Whether it's a flea market, concert, gallery opening, or a new café or restaurant, our site helps you find the best events around the corner.
        </p>
        <p className="about-text">
          Our goal is to bring the community closer by providing a space for users to discover and share events happening in their Kiez. You can easily browse events by quarters in Berlin and stay connected with what's going on near you.
        </p>
        <p className="about-text">
          Join us in celebrating the vibrant culture and dynamic events that make each Kiez unique. Stay informed, get involved, and enjoy everything your neighborhood has to offer.
        </p>
      </div>
      <div className="about-grid">
        <div className="about-person">
          <img src="" alt="Magdalena" className="about-image" />
          <div className="about-details">
            <p className="about-created-by">Created by:</p>
            <p className="about-last-name">Magdalena</p>
            <p className="about-role">Developer</p>
            <p className="about-description">
              Mauris eleifend rhoncus nibh, nec interdum lacus hendrerit vel. Duis varius ac felis sit amet lacinia. Praesent sit amet tempor quam, a consectetur purus. Morbi et eros ultricies, finibus urna vitae, faucibus risus.
            </p>
          </div>
        </div>
        <div className="about-person">
          <img src="" alt="Katrin" className="about-image" />
          <div className="about-details">
            <p className="about-created-by">Created by:</p>
            <p className="about-last-name">Katrin</p>
            <p className="about-role">Developer</p>
            <p className="about-description">
              Mauris eleifend rhoncus nibh, nec interdum lacus hendrerit vel. Duis varius ac felis sit amet lacinia. Praesent sit amet tempor quam, a consectetur purus. Morbi et eros ultricies, finibus urna vitae, faucibus risus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
