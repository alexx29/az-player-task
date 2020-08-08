import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, actuallyList, navigateTo } from "../musicsSlice";
import Music from "../MusicCover";
import PlayingConsole from "../PlayingConsole";
import SelectedMusic from "../SelectedMusic";
import "./Slider.scss";

const SimpleSlider = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ playing: false });
  let sliderRef = useRef(null);
  const { list, selectedMusic } = useSelector(actuallyList);

  const next = () => {
    // dispatch(increment());
    sliderRef.current.slickNext();
  };
  const previous = () => {
    // dispatch(decrement());
    sliderRef.current.slickPrev();
  };

  const togglePlay = () => {
    setState({ ...state, playing: !state.playing });
  };

  const goTo = (prev, next) => {
    dispatch(navigateTo(next));
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
        beforeChange={goTo}
      >
        {list.map((music, i) => (
          <div style={{ width: 290 }}>
            <Music img={music.img} />
          </div>
        ))}
      </Slider>
      <SelectedMusic {...selectedMusic} />
      <PlayingConsole
        next={next}
        previous={previous}
        togglePlay={togglePlay}
        playing={state.playing}
      />
    </>
  );
};

export default SimpleSlider;
