import React from "react";
import UpperRow from "../UpperRow/Upperrow";
import LowerRow from "../LowerRow/LowerRow";
import "./TwoRows.css";

const TwoRows = () => {
  return (
    <div className="TRContainer">
      <div className="green-circle-background"></div>
      <div className="upper-row">
        <UpperRow />
      </div>
      <div className="lower-row">
        <LowerRow />
      </div>
    </div>
  );
};

export default TwoRows;
