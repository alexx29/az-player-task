import React from "react";
import "./PlayingConsole.scss";

const PlayingConsole = ({ previous, next }) => {
  return (
    <div className="playingConsole">
      <button className="button" onClick={previous}>
        Previous
      </button>
      <button className="button" onClick={next}>
        Next
      </button>
    </div>
  );
};

export default PlayingConsole;
