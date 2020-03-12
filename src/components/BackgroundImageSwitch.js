import React from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";

const BackgroundImageSwitch = ({ images, children, switchHeight }) => {
  const [tableHeight, mobileHeight] = switchHeight;
  const [tableImage, mobileImage] = images;
  return (
    <div>
      <MediaQuery minDeviceWidth={1224}>
        <div
          className="full-width-image margin-top-0"
          style={{
            height: tableHeight,
            backgroundImage: `url(${
              !!tableImage.image.childImageSharp
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
      <MediaQuery maxDeviceWidth={1223}>
        <div
          className="full-width-image margin-top-0"
          style={{
            height: mobileHeight,
            backgroundImage: `url(${
              !!mobileImage.image.childImageSharp
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
    </div>
  );
};

BackgroundImageSwitch.defaultProps = {
  switchHeight: ["600px", "200px"]
};

BackgroundImageSwitch.propTypes = {
  images: PropTypes.array,
  switchHeight: PropTypes.array
};

export default BackgroundImageSwitch;
