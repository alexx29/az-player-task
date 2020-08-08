import React from "react";
import "./SelectedMusic.scss";

const SelectedMusic = ({ name, author }) => {
  return (
    <div className="SelectedMusic">
      <h2 className="SelectedMusic__name">{name}</h2>
      <p className="SelectedMusic__author">{author}</p>
    </div>
  );
};

export default SelectedMusic;
