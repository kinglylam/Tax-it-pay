// Header.tsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>

      <div>
        {" "}
        <a href="#" className="nav-link active">
          For Individuals
        </a>
        <a href="#" className="nav-link">
          For Businesses
        </a>
      </div>
      <nav className="nav">
        <a href="#" className="nav-link">
          About Us
        </a>
        <a href="#" className="nav-link">
          Contact
        </a>
      </nav>
      <div className="header-buttons">
        <button className="login-button">Login</button>
        <button className="signup-button">Create Free Account</button>
      </div>
    </header>
  );
};

export default Header;
