import React from "react";
import "./HeroOne.css";

const HeroOne = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="text-section">
          <h1>Secure & seamless online transactions</h1>
          <p>Providing you with the best online payment experience</p>
          <button className="cta-button-hero">Create free account</button>
        </div>
        <div className="image-section">
          <div className="circle-wrapper circle1">
            <img src="Ellipse 4.png" alt="Image 1" />
          </div>
          <div className="circle-wrapper circle2">
            <img src="Ellipse 3.png" alt="Image 2" />
          </div>
          <div className="circle-wrapper circle3">
            <img src="Ellipse 5.png" alt="Image 3" />
          </div>
          <div className="circle-gold"></div>
          <div className="circle-green"></div>
          <div className="border-thin-green"></div>
          <div className="border-thick-green"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroOne;
