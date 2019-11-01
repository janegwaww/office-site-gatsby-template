import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductSeekerBanner = ({bannerInfo}) => {
  const {image, seekerslider} = bannerInfo;
  const slider = {
    dots: false,
    arrows: false,
    speed: 2000,
    autoplaySpeed: 2000,
    autoplay: true,
    fade: true,
    infini: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerMode: true,
    centerPadding: "0px",
    pauseOnHover: false,
    variableWidth: true,
    className: "seeker-carousel",
  };
  return (
    <div
      className="seeker-banner"
      style={{
        height: "698px",
        backgroundImage: `url(${
          !!image ? image.childImageSharp.fluid.src : image
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="slider-container">
          <Slider {...slider}>
            {seekerslider.map((o, i) => (
              <figure className="image is-681x383" key={i} style={{width: 681}}>
                <PreviewCompatibleImage
                  imageInfo={{...o, style: {borderRadius: 0}}}
                  key={i}
                />
              </figure>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

ProductSeekerBanner.defaultProps = {
  bannerInfo: {
    image: {},
    alt: "seeker search engine",
    seekerslider: [],
  },
};

ProductSeekerBanner.propTypes = {
  bannerInfo: PropTypes.shape({
    image: PropTypes.object,
    alt: PropTypes.string,
    seekerslider: PropTypes.array,
  }),
};

export default ProductSeekerBanner;
