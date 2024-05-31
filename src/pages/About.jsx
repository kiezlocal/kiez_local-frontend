import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About</h1>
      <div className="about-content">
        <p>
          Welcome to our event recommendation platform, where you can stay updated on all the exciting happenings in your neighborhood. Whether it's a flea market, concert, gallery opening, or a new café or restaurant, our site helps you find the best events around the corner.
        </p>
        <p>
          Our goal is to bring the community closer by providing a space for users to discover and share events happening in their Kiez. You can easily browse events by quarters in Berlin and stay connected with what's going on near you.
        </p>
        <p>
          Join us in celebrating the vibrant culture and dynamic events that make each Kiez unique. Stay informed, get involved, and enjoy everything your neighborhood has to offer.
        </p>
      </div>
      <div className="team-grid">
        <div className="team-member">
          <img src="path-to-magdalena-image.jpg" alt="Magdalena" className="team-image" />
          <h3>Magdalena</h3>
          <h4>Developer</h4>
          <p>
            Mauris eleifend rhoncus nibh, nec interdum lacus hendrerit vel. Duis varius ac felis sit amet lacinia. Praesent sit amet tempor quam, a consectetur purus. Morbi et eros ultricies, finibus urna vitae, faucibus risus.
          </p>
        </div>
        <div className="team-member">
          <img src="path-to-katrin-image.jpg" alt="Katrin" className="team-image" />
          <h3>Katrin</h3>
          <h4>Developer</h4>
          <p>
            Mauris eleifend rhoncus nibh, nec interdum lacus hendrerit vel. Duis varius ac felis sit amet lacinia. Praesent sit amet tempor quam, a consectetur purus. Morbi et eros ultricies, finibus urna vitae, faucibus risus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
