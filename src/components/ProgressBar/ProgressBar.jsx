import React from "react";
import "./ProgressBar.scss";

const ProgressBar = ({ progress, className }) => {
  return (
    <div className={`progressBar ${className}`}>
      <div className="progressBar__max" />
      <div
        className="progressBar__progress"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
