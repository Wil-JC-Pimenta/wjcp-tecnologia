import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Fecha o menu após clicar
    }
  };

  return (
    <header className={`header ${scrolling ? "scrolling" : ""}`}>
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
              <a href="#contact" onClick={handleScrollToContact}>
                Contato
              </a>
            </li>
          </ul>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? "active" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "active" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "active" : ""}`}></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
