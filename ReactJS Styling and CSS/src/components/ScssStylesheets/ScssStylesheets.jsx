import React from "react";
import "./ScssStylesheets.scss";

const ScssStylesheets = (props) => {
  const { primary } = props;
  const className = primary ? "primary" : "secondary";

  return (
    <div className="ScssStylesheetsWrapper">
      <h1 className={`${className}`}>Heading1</h1>
    </div>
  );
};

export default ScssStylesheets;
