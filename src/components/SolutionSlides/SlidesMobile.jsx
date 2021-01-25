import React from "react";
import Slider from "react-slick";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlidesMobile = ({ tabs = [] }) => {
  const slider = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="slides-mobile">
      <Slider {...slider}>
        {tabs.map((o, i) => {
          const { title, subtitle, images } = o;
          const [image] = images || [{}];
          return (
            <div key={title} className="content slides-item">
              <p>{`0${i + 1}`}</p>
              <p>{title}</p>
              <p>{subtitle}</p>
              <PreviewCompatibleImage imageInfo={image} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SlidesMobile;
