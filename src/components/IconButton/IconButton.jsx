import React from "react";

import "./IconButton.scss";

const IconButton = ({ img, onClick, className, active }) => (
  <button
    className={`iconButton ${className} ${active ? "iconButton--active" : ""}`}
    onClick={onClick}
  >
    {img && <img src={img} alt="" />}
  </button>
);

export default IconButton;
