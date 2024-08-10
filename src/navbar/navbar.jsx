import React from "react";
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src="/logo.png" alt="Logo" className="logo-img" />
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#about" className="nav-links">About</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-links">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;