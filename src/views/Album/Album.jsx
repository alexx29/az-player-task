import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector, useDispatch } from "react-redux";
import {
  actuallyList,
  changeModeInfinitty,
  changeModeRandom,
  nextMusic,
  previusMusic,
} from "./musicsSlice";
import Music from "./MusicCover";
import MusicConsole from "./MusicConsole";
import SelectedMusic from "./SelectedMusic";
import "./Album.scss";

const Album = () => {
  let sliderRef = useRef(null);
  const dispatch = useDispatch();
  const { list, selectedMusic, selectedIndex, random } = useSelector(
    actuallyList
  );
  const [state, setState] = useState({
    playing: false,
    selectedIndex,
  });

  useEffect(() => {
    if (state.selectedIndex !== selectedIndex) {
      const different = selectedIndex - state.selectedIndex;
      const comeBackBegin = different === -(list.length - 1);
      const comeBackLast = different === list.length - 1;
      if (different === 1 || comeBackBegin) {
        sliderRef.current.slickNext();
      } else if (different === -1 || comeBackLast) {
        sliderRef.current.slickPrev();
      } else if (random) {
        sliderRef.current.slickGoTo(selectedIndex);
      }
      setState({ ...state, selectedIndex });
    }
  }, [selectedIndex]);

  const togglePlay = () => {
    setState({ ...state, playing: !state.playing });
  };

  return (
    <>
      <Slider
        ref={sliderRef}
        className="center slider variable-width"
        centerMode
        infinite
        speed={500}
        slidesToShow={1}
        slidesToScroll={2}
        variableWidth
      >
        {list.map((music, i) => (
          <div style={{ width: 290 }}>
            <Music img={music.img} />
          </div>
        ))}
      </Slider>
      <SelectedMusic {...selectedMusic} />
      <MusicConsole
        next={() => dispatch(nextMusic())}
        playRandom={() => dispatch(changeModeRandom())}
        playInfinity={() => dispatch(changeModeInfinitty())}
        previous={() => dispatch(previusMusic())}
        togglePlay={togglePlay}
        playing={state.playing}
      />
    </>
  );
};

export default Album;
