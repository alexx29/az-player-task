import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, actuallyList } from "../musicsSlice";
import Music from "../MusicCover";
import PlayingConsole from "../PlayingConsole";
import SelectedMusic from "../SelectedMusic";
import "./Slider.scss";

const SimpleSlider = () => {
  let sliderRef = useRef(null);
  const { list, selectedMusic } = useSelector(actuallyList);

  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <Slider
        ref={sliderRef}
        className="center slider"
        centerMode
        infinite
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        variableWidth
      >
        {list.map((music, i) => (
          <>
            <Music
              key={music.id}
              img={music.img}
              selected={selectedMusic.id === music.id}
            />
          </>
        ))}
      </Slider>
      <SelectedMusic {...selectedMusic} />
      <PlayingConsole next={next} previous={previous} />
    </>
  );
};

export default SimpleSlider;
