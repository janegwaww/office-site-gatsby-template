import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import withSize from "react-sizes";

function Banner({ isMobile }) {
  const [imageUrl, setImageUrl] = useState("./img/index-banner.png");
  const [columnSize, setColumnSize] = useState("is-two-fifths");
  useEffect(() => {
    if (isMobile) {
      setImageUrl("./img/index-banner-mobile.png");
      setColumnSize("is-8");
    }
  });
  const Title = () => (
    <div>
      <div className="content">
        <p className="is-size-4-mobile is-size-2-tablet is-size-2-widescreen has-text-white">
          {`数据场景化搭建`}
        </p>
      </div>
      <div className="content">
        <p className="is-size-6-mobile is-size-5-tablet is-size-5-widescreen has-text-white">
          {`实现数据的按需汇聚，让应用像阳光，照亮业务场景的每个角落`}
        </p>
      </div>
      <div className="content">
        <a className="button is-opacity is-size-7-mobile">了解Seeker</a>
      </div>
    </div>
  );
  return (
    <div>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundColor: `gray`,
          backgroundSize: "100% 100%"
        }}
      >
        <div className="container">
          <div className="columns is-mobile">
            <div className="column is-10 is-offset-1">
              <div className="columns is-mobile">
                <div className={`column ${columnSize}`}>
                  <Title />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768
});

export default withSize(mapSizesToProps)(Banner);
