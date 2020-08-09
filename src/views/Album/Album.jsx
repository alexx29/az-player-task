import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { actuallyList } from "./musicsSlice";
import MusicConsole from "./MusicConsole";
import SelectedMusic from "./SelectedMusic";
import MusicSlider from "./MusicSlider";

const Album = () => {
  const { selectedMusic, selectedIndex } = useSelector(actuallyList);
  const [state, setState] = useState({
    playing: false,
    selectedIndex,
  });

  const togglePlay = () => {
    setState({ ...state, playing: !state.playing });
  };

  return (
    <>
      <MusicSlider />
      <SelectedMusic {...selectedMusic} />
      <MusicConsole
        // next={() => dispatch(nextMusic())}
        // playRandom={() => dispatch(changeModeShuffle())}
        // playInfinity={() => dispatch(changeModeInfinitty())}
        // previous={() => dispatch(previusMusic())}
        togglePlay={togglePlay}
        playing={state.playing}
      />
    </>
  );
};

export default Album;
