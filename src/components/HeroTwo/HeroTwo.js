import React from "react";
import "./HeroTwo.css";
const HeroTwo = () => {
  return (
    <div className="two-hero">
      <div className="second-hero-content">
        <h1>Manage payroll, compliance & HR in real time</h1>
        <p>
          Make income tax remittances to the state internal revenue service for
          your employees.
        </p>
        <button className="cta-button-ht">Create free account</button>
      </div>
      <div className="second-hero-circular-green"></div>
      <div className="second-hero-border-green"></div>
      <div className="second-hero-image-container">
        <img
          src="Rectangle21.png"
          alt="Group of people smiling"
          className="second-hero-image"
        />
      </div>
    </div>
  );
};

export default HeroTwo;
