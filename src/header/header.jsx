import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-text">
          <h1 className="header-title">Welcome</h1>
          <p className="header-subtitle">
            I'm Esteban, a frontend developer passionate about designing and creating professional websites. Let's talk and make your ideas a reality.
          </p>
          <div className="header-buttons">
            <button className="header-button contact-button">
              Contact Me
            </button>
            <button className="header-button cv-button">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;