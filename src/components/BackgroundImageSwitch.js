import React from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";

const BackgroundImageSwitch = ({ images, children, switchHeight }) => {
  const [tableHeight, mobileHeight] = switchHeight;
  const [tableImage, mobileImage] = images;
  return (
    <>
      <MediaQuery minDeviceWidth={768}>
        <div
          className="full-width-image margin-top-0"
          style={{
            height: tableHeight,
            backgroundImage: `url(${
              !!tableImage.image
                ? tableImage.image.childImageSharp.fluid.src
                : tableImage.image
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          {children}
        </div>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={768}>
        <div
          className="full-width-image margin-top-0"
          style={{
            height: mobileHeight,
            backgroundImage: `url(${
              !!mobileImage.image
                ? mobileImage.image.childImageSharp.fluid.src
                : mobileImage.image
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          {children}
        </div>
      </MediaQuery>
    </>
  );
};

BackgroundImageSwitch.defaultProps = {
  switchHeight: ["600px", "200px"]
};

BackgroundImageSwitch.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.object.isRequired,
      alt: PropTypes.string
    })
  ),
  switchHeight: PropTypes.array
};

export default BackgroundImageSwitch;
