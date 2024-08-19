import React from "react";
import "./LowerRow.css";

const LowerRow = () => {
  return (
    <div className="lower-row">
      <div className="phone-image">
        <img src="GooglePixel5.png" alt="Phone UI" />
      </div>
      <div className="text-section-lr">
        <h2>Transact on the go</h2>
        <p>Stay on top of your business with our easy-to-use app</p>
        <button className="cta-button-lr">Get Started</button>
        <div className="app-buttons">
          <img src="appstore.png" alt="App Store" />
          <img src="googleplay.png" alt="Google Play" />
        </div>
      </div>
    </div>
  );
};

export default LowerRow;
