import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  actuallyList,
  selectMusic,
} from "../musicsSlice";
import Music from "../MusicCover";
import MusicConsole from "../MusicConsole";
import SelectedMusic from "../SelectedMusic";
import "./Slider.scss";

const SimpleSlider = () => {
  let sliderRef = useRef(null);
  const dispatch = useDispatch();
  const { list, selectedMusic } = useSelector(actuallyList);
  const [state, setState] = useState({ playing: false });

  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const togglePlay = () => {
    setState({ ...state, playing: !state.playing });
  };

  const beforeChange = (prev, next) => {
    dispatch(selectMusic(next));
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
        slidesToScroll={1}
        variableWidth
        beforeChange={beforeChange}
      >
        {list.map((music, i) => (
          <div style={{ width: 290 }}>
            <Music img={music.img} />
          </div>
        ))}
      </Slider>
      <SelectedMusic {...selectedMusic} />
      <MusicConsole
        next={next}
        previous={previous}
        togglePlay={togglePlay}
        playing={state.playing}
      />
    </>
  );
};

export default SimpleSlider;
