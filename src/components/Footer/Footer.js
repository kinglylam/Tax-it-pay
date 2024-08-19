import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src="logo.png" alt="TaxIT Pay Logo" className="footer-logo" />
        <div className="footer-social-icons">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
        </div>
        <p className="footer-copyright">
          2015-2022 Taxaide Technologies Limited. All rights reserved
        </p>
      </div>

      <div className="footer-right">
        <div className="footer-section">
          <h4>About Us</h4>
          <ul>
            <li>About</li>
            <li>Legal & Privacy</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Products</h4>
          <ul>
            <li>TBook®</li>
            <li>TaxiTWithhold®</li>
            <li>TaxiTPayroll®</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
