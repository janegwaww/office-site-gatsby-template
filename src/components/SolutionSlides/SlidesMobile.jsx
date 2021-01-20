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
        {tabs.map((o, i) => (
          <div key={o.title} className="content slides-item">
            <p>{i + 1}</p>
            <p>{o.title}</p>
            <p>{o.subtitle}</p>
            <PreviewCompatibleImage imageInfo={o.images[1]} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlidesMobile;
