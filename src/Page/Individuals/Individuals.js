import React from "react";
import HeroOne from "../../components/HeroOne/HeroOne";
import PaymentTools from "../../components/PaymentTools/PaymentTools";
import SendFunds from "../../components/SendFunds/SendFunds";
import "./Individuals.css";
import UpperRow from "../../components/UpperRow/Upperrow";
import LowerRow from "../../components/LowerRow/LowerRow";

const Individuals = () => {
  return (
    <div>
      <HeroOne />
      <PaymentTools />
      <div className="TRContainer">
        <div className="green-circle-backgroud-border"></div>
        <div className="green-circle-background "></div>

        <div className="upper-row-i">
          <UpperRow />
        </div>
        <div className="lower-row-i">
          <LowerRow />
        </div>
      </div>
      <SendFunds />
    </div>
  );
};

export default Individuals;
