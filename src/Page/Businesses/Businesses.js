import React from "react";
import HeroTwo from "../../components/HeroTwo/HeroTwo";
import PaymentTools from "../../components/PaymentTools/PaymentTools";
import UpperRow from "../../components/UpperRow/Upperrow";
import SendFunds from "../../components/SendFunds/SendFunds";

const Businesses = () => {
  return (
    <div className="BizContainer">
      <HeroTwo />
      <PaymentTools />
      <div className="TRContainer">
        <div className="green-circle-backgroud-border"></div>
        <div className="green-circle-background "></div>

        <div className="upper-row-i">
          <UpperRow />
        </div>
        <div className="lower-row-i">
          <SendFunds />
        </div>
      </div>
    </div>
  );
};

export default Businesses;
