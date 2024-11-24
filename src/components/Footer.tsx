// src/components/Footer.tsx
import React from "react";
import "./Footer.css"; // Make sure to create a CSS file for styling

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/nearby"> Places Nearby</a>
          <a href="/gallery">Gallery</a>
        </div>
        <div>Cozy cova, Near Sengulam Dam, Sengulam, Idukki, Kerala 685565</div>
        <p>
          <a href="tel:+919074561930">+91 90745 61930</a>
        </p>
        <div className="footer-info">
          <p>&copy; 2024 Cozy Cova Homestay. All rights reserved.</p>
        </div>
        <div className="footer-social">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/cozy_cova/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
