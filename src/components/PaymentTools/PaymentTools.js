import React from "react";
import "./PaymentTools.css";

const PaymentTools = () => {
  return (
    <div className="container">
      <div className="text-container">
        <h1 className="title">Payments tools designed for you</h1>
        <p className="sub-title">
          Explore payment features that provides you with every possible
          solution
        </p>
      </div>

      <div className="pt-container">
        <div className="pt">
          <img src="Money Transfer.png" />
          <div className="pt-details">
            <h3 className="pt-h">User Friendly</h3>
            <p className="pt-p">Highly responsive and easy to navigate</p>
          </div>
        </div>
        <div className="pt">
          <img src="Security.png" />
          <div className="pt-details">
            <h3 className="pt-h">Secure</h3>
            <p className="pt-p">
              Your data is secure. It is continuously monitored, audited, and
              stored in an encrypted form.
            </p>
          </div>
        </div>
        <div className="pt">
          <img src="EMI.png" />
          <div className="pt-details">
            <h3 className="pt-h">Fast</h3>
            <p className="pt-p">
              Transacting takes only a few seconds - it's convenient and safe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentTools;
