import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NextIcon from "../../../assets/images/next_ico.svg";
import PreviousIcon from "../../../assets/images/previous_ico.svg";
import RepeatIcon from "../../../assets/images/repeat_ico.svg";
import ShuffleIcon from "../../../assets/images/shuffle_ico.svg";
import {
  actuallyList,
  changeModeRepeat,
  changeModeShuffle,
  nextMusic,
  previusMusic,
  togglePlayMusic,
  selectMusic,
} from "../musicsSlice";
import "./MusicConsole.scss";
import IconButton from "../../../components/IconButton";
import getRandomMusic from "../../../helpers/getRandomMusic";

const MusicConsole = () => {
  const dispatch = useDispatch();
  const { shuffle, repeat, playing, list, selectedIndex } = useSelector(
    actuallyList
  );

  const playNext = () => {
    const randomMusic = getRandomMusic(selectedIndex, list.length);
    if (shuffle) {
      return dispatch(selectMusic(randomMusic));
    }
    return dispatch(nextMusic());
  };

  const playPrevius = () => {
    const randomMusic = getRandomMusic(selectedIndex, list.length);
    if (shuffle) {
      return dispatch(selectMusic(randomMusic));
    }
    return dispatch(previusMusic());
  };

  return (
    <div className="musicConsole">
      <IconButton
        active={shuffle}
        img={ShuffleIcon}
        onClick={() => dispatch(changeModeShuffle())}
      />
      <IconButton img={PreviousIcon} onClick={playPrevius} />
      <IconButton
        className={`musicConsole__togglePlay ${
          playing
            ? "musicConsole__togglePlay--played"
            : "musicConsole__togglePlay--stoped"
        }`}
        onClick={() => dispatch(togglePlayMusic())}
      />
      <IconButton img={NextIcon} onClick={playNext} />
      <IconButton
        active={repeat}
        img={RepeatIcon}
        onClick={() => dispatch(changeModeRepeat())}
      />
    </div>
  );
};

export default MusicConsole;
