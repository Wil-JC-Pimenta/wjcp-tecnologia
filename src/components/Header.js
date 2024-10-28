// src/components/Header.js
import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">WJCP</div>
      <nav>
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <a href="#home" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={toggleMenu}>
                Portfólio
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contato
              </a>
            </li>
          </ul>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
