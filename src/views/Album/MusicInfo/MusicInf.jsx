import React from "react";
import "./MusicInf.scss";

const MusicInf = ({ name, author }) => (
  <div className="musicInf">
    <h2 className="musicInf__name">{name}</h2>
    <p className="musicInf__author">{author}</p>
  </div>
);

export default MusicInf;
