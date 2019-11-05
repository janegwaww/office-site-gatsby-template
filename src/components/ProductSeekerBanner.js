import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import BackgroundImageSwitch from "../components/BackgroundImageSwitch";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductSeekerBanner = ({bannerInfo}) => {
  const {image1, image2, alt, seekerslider} = bannerInfo;
  const images = [{image: image1, alt}, {image: image2, alt}];
  const slider = {
    dots: false,
    arrows: false,
    speed: 500,
    autoplaySpeed: 2000,
    autoplay: true,
    // fade: true,
    infini: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    variableWidth: true,
    className: "seeker-carousel",
  };
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
  }, []);
  return (
    <BackgroundImageSwitch images={images} switchHeight={["698px", "349px"]}>
      <div className="container">
        <div className="slider-container">
          {isMobile ? null : (
            <Slider {...slider}>
              {seekerslider.map((o, i) => (
                <figure
                  className="image is-681x383"
                  key={i}
                  style={{width: 681}}
                >
                  <PreviewCompatibleImage
                    imageInfo={{...o, style: {borderRadius: 0}}}
                    key={i}
                  />
                </figure>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </BackgroundImageSwitch>
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
