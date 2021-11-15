import React, { useState, useRef } from "react";
import styles from "../styles/BigBoard.module.css";
import "../styles/BigBoard.css";
import Category from "./Category";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Categories() {
  const [disableNextClick, setDisableNextClick] = useState(false);
  const [disablePreviousClick, setDisablePreviousClick] = useState(true);
  const [quantitySlide, setQuantitySlide] = useState(2);
  const [count, setCount] = useState(1);

  const customeSlider = useRef();
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
  };

  const gotoNext = () => {
    setDisablePreviousClick(false);
    customeSlider.current.slickNext();
    setCount(count + 1);
    if (count >= quantitySlide) {
      setCount(count - 1);
      setDisableNextClick(true);
    }
    console.log(count);
  };

  const gotoPrev = () => {
    setDisableNextClick(false);
    console.log(count);
    if (count >= 1) {
      setCount(count - 1);
    }

    customeSlider.current.slickPrev();
    if (count < 1) {
      setCount(count + 1);
      setDisablePreviousClick(true);
    }
  };
  return (
    <div>
      <div className={styles.WrappedStyled}>
        <div className={styles.JunctionComponent__Wrapper}>
          <div className={styles.headerContainer}>
            <h2>Categories</h2>
            <div>
              {" "}
              <Button
                size="large"
                shape="circle"
                onClick={() => gotoPrev()}
                disabled={disablePreviousClick}
              >
                <LeftOutlined />
              </Button>
              <Button
                size="large"
                shape="circle"
                onClick={() => gotoNext()}
                disabled={disableNextClick}
              >
                <RightOutlined />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Slider {...settings} ref={customeSlider}>
        <Category></Category>
        <Category></Category>
        <Category></Category>
        <Category></Category>
        <Category></Category>
        <Category></Category>
        <Category></Category>
        <Category></Category>
        <Category></Category>
        <Category></Category>
        <Category></Category>
        <Category></Category>
        <Category></Category>
        <Category></Category>
        <Category></Category>
        <Category></Category>
        <Category></Category>
        
      </Slider>
    </div>
  );
}
