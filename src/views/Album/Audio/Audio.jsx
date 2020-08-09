import React, { useMemo, useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actuallyList, selectMusic, nextMusic } from "../musicsSlice";
import getRandomMusic from "../../../helpers/getRandomMusic";
import ProgressBar from "../../../components/ProgressBar";

const Audio = () => {
  const dispatch = useDispatch();
  const {
    repeat,
    playing,
    list,
    selectedIndex,
    selectedMusic,
    shuffle,
  } = useSelector(actuallyList);

  const [lastSelectedIndex, setSelectedIndex] = useState(selectedIndex);
  const [musicProgress, setMusicProgress] = useState(0);

  const percent = useMemo(
    () => (musicProgress / selectedMusic.duration) * 100,
    [musicProgress, selectedMusic.duration]
  );

  const setCurrentMusic = useCallback(() => {
    if (repeat) {
      return dispatch(selectMusic(selectedIndex));
    } else if (shuffle) {
      return dispatch(selectMusic(getRandomMusic(selectedIndex, list.length)));
    }
    return dispatch(nextMusic());
  }, [selectedIndex, shuffle, repeat, list]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (musicProgress < selectedMusic.duration) {
        if (playing) {
          return setMusicProgress(musicProgress + 10);
        }
      } else {
        setCurrentMusic();
        setMusicProgress(0);
      }
    }, 1000);

    if (lastSelectedIndex !== selectedIndex) {
      clearTimeout(timer);
      setMusicProgress(0);
      setSelectedIndex(selectedIndex);
    }

    return () => clearTimeout(timer);
  }, [musicProgress, playing, selectedIndex]);

  return (
    <div>
      <ProgressBar />
      <h1>{percent}</h1>
    </div>
  );
};

export default Audio;
