import React from "react";
import Logo from "../../../assets/images/usertive_logo.svg";
import "./MusicCover.scss";

const MusicCover = ({ img, selected }) => {
  return (
    <>
      <div className={`MusicCover ${selected ? "MusicCover--selected" : ""}`}>
        <img className="MusicCover__cover" src={img} alt="" />
        {selected && (
          <div className="MusicCover__logo ">
            <img src={Logo} alt="usertive_logo" />
          </div>
        )}
      </div>
    </>
  );
};

export default MusicCover;
