// src/components/Footer.js
import React from "react";
import { FaFacebook, FaTiktok, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 WJCP Tecnologia. Todos os direitos reservados.</p>
        <div className="contact-info">
          <p>
            Email:{" "}
            <a
              href="mailto:wiljcpimenta@gmail.com
            "
            >
              wiljcpimenta@gmail.com
            </a>
          </p>
        </div>
        <div className="social-icons">
          <a
            href="https://www.tiktok.com/@wilkerdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/wil-jc-pimenta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
