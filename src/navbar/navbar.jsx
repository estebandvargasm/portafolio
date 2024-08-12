import React, { useState } from "react";
import './navbar.css';

function Navbar() {
  const [activeLink, setActiveLink] = useState(""); // Estado para el enlace activo

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src="/logo.png" alt="Logo" className="logo-img" />
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a
              href="#about"
              className={`nav-links ${activeLink === "about" ? "active" : ""}`}
              onClick={() => setActiveLink("about")}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#projects"
              className={`nav-links ${activeLink === "projects" ? "active" : ""}`}
              onClick={() => setActiveLink("projects")}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              className={`nav-links ${activeLink === "contact" ? "active" : ""}`}
              onClick={() => setActiveLink("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
