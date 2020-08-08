import React from "react";
import "./PlayingConsole.scss";

const PlayingConsole = ({ previous, next }) => {
  return (
    <div className="playingConsole">
      <button
        className="playingConsole__button playingConsole__button--previous"
        onClick={previous}
      >
        Previous
      </button>
      <button
        className="playingConsole__button playingConsole__button--play"
        onClick={next}
      >
        play
      </button>
      <button
        className="playingConsole__button playingConsole__button--next"
        onClick={next}
      >
        Next
      </button>
    </div>
  );
};

export default PlayingConsole;
