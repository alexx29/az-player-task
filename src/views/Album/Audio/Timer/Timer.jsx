import React from "react";
import moment from "moment";
import ProgressBar from "../../../../components/ProgressBar";
import "./Timer.scss";

const Timer = ({ percent, musicProgress, duration }) => {
  return (
    <div className="timer">
      <span className="timer__time">
        {moment({
          minutes: Math.floor(musicProgress / 60),
          seconds: musicProgress % 60,
        }).format("m:ss")}
      </span>

      <ProgressBar progress={percent} className="timer__progress" />
      <span className="timer__time">
        {moment({
          minutes: Math.floor(duration / 60),
          seconds: duration % 60,
        }).format("m:ss")}
      </span>
    </div>
  );
};

export default Timer;
