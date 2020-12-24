import React, { useEffect } from "react";
import PropTypes from "prop-types";
import bulmaCarousel from "../../node_modules/bulma-extensions/bulma-carousel/dist/js/bulma-carousel.min.js";

function BannerCarousel({ bannerInfo = [] }) {
  useEffect(() => {
    const carousels = bulmaCarousel.attach("#carousel-haetek", {
      slidesToScroll: 1,
      slidesToShow: 1,
      autoplay: true,
      effect: "fade",
      loop: true,
      pagination: false
    });
  });
  const mouseInOut = side => {
    const element = document.getElementById("carousel-haetek");
    const prev = element.getElementsByClassName(
      "slider-navigation-previous"
    )[0];
    const next = element.getElementsByClassName("slider-navigation-next")[0];
    if (!prev || !next) {
      return;
    }
    if (side === "in") {
      prev.style.display = "flex";
      next.style.display = "flex";
    } else {
      prev.style.display = "none";
      next.style.display = "none";
    }
  };
  return (
    <section
      className="hero is-medium has-carousel full-width-image"
      onMouseOut={() => mouseInOut("out")}
      onMouseOver={() => mouseInOut("in")}
    >
      <div id="carousel-haetek" className="hero-carousel">
        <div className="item-1">
          <div>
            <img src={`./img/index-banner.png`} alt="banner" />
          </div>
        </div>
        <div className="item-2">
          <img src={`./img/banner.png`} alt="banner" />
        </div>
      </div>
      <div className="hero-head"></div>
      <div className="hero-body"></div>
      <div className="hero-foot"></div>
    </section>
  );
}

BannerCarousel.propTypes = {
  bannerInfo: PropTypes.array
};

export default BannerCarousel;
