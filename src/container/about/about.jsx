import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          I'm Esteban, a frontend developer passionate about designing and creating professional websites. Let's talk and make your ideas a reality.
          I'm Esteban, a frontend developer passionate about designing and creating professional websites. Let's talk and make your ideas a reality.
          I'm Esteban, a frontend developer passionate about designing and creating professional websites. Let's talk and make your ideas a reality.
        </p>
        <div className="about-buttons">
          <button className="about-button contact-button">
            Contact Me
          </button>
          <button className="about-button cv-button">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;