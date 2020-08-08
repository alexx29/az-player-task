import React from "react";
import "./MusicConsole.scss";

const MusicConsole = ({
  previous,
  next,
  togglePlay,
  playRandom,
  playInfinity,
  playing,
}) => {
  return (
    <div className="MusicConsole">
      <button
        className="MusicConsole__button MusicConsole__button--random"
        onClick={playRandom}
      />
      <button
        className="MusicConsole__button MusicConsole__button--previous"
        onClick={previous}
      />
      <button
        className={`MusicConsole__togglePlay MusicConsole__button ${
          playing
            ? "MusicConsole__togglePlay--played"
            : "MusicConsole__togglePlay--stoped"
        }`}
        onClick={togglePlay}
      />
      <button
        className="MusicConsole__button MusicConsole__button--next"
        onClick={next}
      />
      <button
        className="MusicConsole__button MusicConsole__button--repeat"
        onClick={playInfinity}
      />
    </div>
  );
};

export default MusicConsole;
