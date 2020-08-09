import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { actuallyList } from "../musicsSlice";
import Music from "../MusicCover";
import "./MusicSlider.scss";

const MusicSlider = () => {
  let sliderRef = useRef(null);
  const { list, selectedIndex, random } = useSelector(actuallyList);
  const [state, setState] = useState({
    selectedIndex,
  });

  useEffect(() => {
    if (state.selectedIndex !== selectedIndex) {
      const different = selectedIndex - state.selectedIndex;
      const comeBackBegin = different === -(list.length - 1);
      const goLast = different === list.length - 1;
      if (different === 1 || comeBackBegin) {
        sliderRef.current.slickNext();
      } else if (different === -1 || goLast) {
        sliderRef.current.slickPrev();
      } else if (random) {
        sliderRef.current.slickGoTo(selectedIndex);
      }
      setState({ ...state, selectedIndex });
    }
  }, [selectedIndex]);

  return (
    <Slider
      ref={sliderRef}
      className="center musicSlider variable-width"
      centerMode
      infinite
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
      variableWidth
    >
      {list.map((music, i) => (
        <div key={music.id + "-cov"} style={{ width: 290 }}>
          <Music img={music.img} />
        </div>
      ))}
    </Slider>
  );
};

export default MusicSlider;
