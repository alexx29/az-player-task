import React from "react";
import SimpleSlider from "./Slider";
import "./Album.scss";

const Album = () => {
  return (
    <div className="album">
      <header className="album__header" />
      <SimpleSlider />
    </div>
  );
};

export default Album;
