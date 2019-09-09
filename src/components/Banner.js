import React from "react";
import PropTypes from "prop-types";

function Banner() {
  return (
    <div>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${"./img/index-banner.png"})`,
          backgroundPosition: `0 55px`,
          backgroundAttachment: `fixed`,
          backgroundColor: `gray`,
          backgroundSize: "contain"
        }}
      >
        <div
          style={{
            display: "flex",
            height: "150px",
            lineHeight: "1",
            justifyContent: "space-around",
            alignItems: "left",
            flexDirection: "column"
          }}
        >
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              /* boxShadow: */
              /*   "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px", */
              /* backgroundColor: "rgb(255, 68, 0)", */
              color: "white",
              lineHeight: "1",
              padding: "0.25em"
            }}
          >
            {/* {`数据场景化搭建`} */}
          </h1>
          <h3
            className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
            style={{
              /* boxShadow: */
              /*   "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px", */
              /* backgroundColor: "rgb(255, 68, 0)", */
              color: "white",
              lineHeight: "1",
              padding: "0.25em"
            }}
          >
            {/* {`实现数据的按需汇聚，让应用像阳光，照亮业务场景的每个角落`} */}
          </h3>
          <div
            style={{
              padding: "0.25em"
            }}
          >
            {/* <a className="button is-white is-normal">了解更多</a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
