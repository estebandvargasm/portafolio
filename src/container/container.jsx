import React from "react";
import "./container.css";

const Container = () => {
  return (
    <section className="container">
      <div className="container-content">
        <h2 className="container-title">Welcome</h2>
        <div className="container-buttons">
          <button className="container-button contact-button">
            Contact Me
          </button>
          <button className="container-button cv-button">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Container;