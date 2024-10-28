// src/components/Footer.js
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 WJCP Tecnologia. Todos os direitos reservados.</p>
        <div className="contact-info">
          <p>
            Email:{" "}
            <a href="mailto:contato@wjcptecnologia.com">
              wiljcpimenta@gmail.com
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/wil-jc-pimenta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wilker Pimenta
            </a>
          </p>
        </div>
        <div className="social-icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="icon" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="icon" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
