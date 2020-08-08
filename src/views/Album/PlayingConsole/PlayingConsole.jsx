import React from "react";
import "./PlayingConsole.scss";

const PlayingConsole = ({ previous, next, togglePlay, playing }) => {
  return (
    <div className="playingConsole">
      <button
        className="playingConsole__button playingConsole__button--previous"
        onClick={previous}
      />
      <button
        className={`playingConsole__togglePlay playingConsole__button ${
          playing
            ? "playingConsole__togglePlay--played"
            : "playingConsole__togglePlay--stoped"
        }`}
        onClick={togglePlay}
      />
      <button
        className="playingConsole__button playingConsole__button--next"
        onClick={next}
      />
    </div>
  );
};

export default PlayingConsole;
