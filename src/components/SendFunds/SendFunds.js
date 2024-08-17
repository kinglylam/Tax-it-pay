import React from "react";
import "./SendFunds.css";

const SendFunds = () => {
  return (
    <div className="background-section">
      <div className="content">
        <div>
          <span className="sp-1">Send funds</span>
          <br></br>
          <span className="sp-2">Remit taxes</span>
          <br></br>
          <span className="sp-2">Buy utilities</span>
        </div>
        <button className="cta-button-sf">Get Started</button>
      </div>
    </div>
  );
};

export default SendFunds;
