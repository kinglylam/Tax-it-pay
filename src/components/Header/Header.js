import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className={menuOpen ? "bar open" : "bar"}></span>
        <span className={menuOpen ? "bar open" : "bar"}></span>
        <span className={menuOpen ? "bar open" : "bar"}></span>
      </div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link special-link active" : "nav-link special-link"
          }
        >
          For Individuals
        </NavLink>
        <NavLink
          to="/businesses"
          className={({ isActive }) =>
            isActive ? "nav-link special-link active" : "nav-link special-link"
          }
        >
          For Businesses
        </NavLink>
        <NavLink className="nav-link">About Us</NavLink>
        <NavLink className="nav-link">Contact</NavLink>
        <NavLink className="nav-link">Login</NavLink>
        <NavLink className="cta-button">Create free account</NavLink>
      </nav>
    </header>
  );
};

export default Header;
