import React from "react";

import "./IconButton.scss";

const IconButton = ({ img, onClick, className, active }) => {
  return (
    <button
      className={`iconButton ${className} ${
        active ? "iconButton--active" : ""
      }`}
      onClick={onClick}
    >
      {img && <img src={img} alt="" />}
    </button>
  );
};

export default IconButton;
