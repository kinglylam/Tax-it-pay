import React, { useState } from "react";
import "./UpperRow.css";
import PayTollFeeComponent from "./TollFee";
import PayBillsComponent from "./PayBills";
import MoneyTransferComponent from "./MoneyTranfer";
import BuyAirtimeComponent from "./BuyAirtime";

const UpperRow = () => {
  const [activeComponent, setActiveComponent] = useState("PayBills");

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "PayBills":
        return <PayBillsComponent />;
      case "BuyAirtime":
        return <BuyAirtimeComponent />;
      case "MoneyTransfer":
        return <MoneyTransferComponent />;
      case "PayTollFee":
        return <PayTollFeeComponent />;
      default:
        return <PayBillsComponent />;
    }
  };

  return (
    <div className="upper-row">
      <div className="left-section">
        <div className="scrollbar">
          <ul>
            <li
              className={activeComponent === "PayBills" ? "active" : ""}
              onClick={() => setActiveComponent("PayBills")}
            >
              <h4>Pay bills</h4>
              <p>Paying your bills has never been so easy.</p>
            </li>
            <li
              className={activeComponent === "BuyAirtime" ? "active" : ""}
              onClick={() => setActiveComponent("BuyAirtime")}
            >
              <h4>Buy Airtime & Data</h4>
              <p>Never get caught with low airtime and data again!</p>
            </li>
            <li
              className={activeComponent === "MoneyTransfer" ? "active" : ""}
              onClick={() => setActiveComponent("MoneyTransfer")}
            >
              <h4>Money Transfer</h4>
              <p>Transferring money is now hassle-free.</p>
            </li>
            <li
              className={activeComponent === "PayTollFee" ? "active" : ""}
              onClick={() => setActiveComponent("PayTollFee")}
            >
              <h4>Pay Toll Fee</h4>
              <p>Never worry about getting a toll ticket again.</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-section">{renderActiveComponent()}</div>
    </div>
  );
};

export default UpperRow;
