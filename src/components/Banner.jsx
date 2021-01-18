import React from "react";
import PropTypes from "prop-types";
import BackgroundImageSwitch from "../components/BackgroundImageSwitch";

const Banner = ({ info = {} }) => {
  return (
    <div className="index-banner">
      <BackgroundImageSwitch
        switchHeight={["1000px", "300px"]}
        images={[
          { image: "/img/index-banner.png" },
          { image: "/img/index-banner-mobile.png" }
        ]}
      >
        <div className="container">
          <div className="columns is-mobile">
            <div className="column is-10 is-offset-1">
              <div className="columns is-mobile">
                <div className={`column is-10 is-offset-1`}>
                  <div className="banner-title">
                    <div className="content">
                      <p className="is-size-5-mobile is-size-3-tablet is-size-1-desktop is-size-0-widescreen has-text-white has-text-centered head text">
                        助力产业AI <span className="h-icon down-white" />{" "}
                        迈向智能新纪元
                      </p>
                    </div>
                    <div className="content">
                      <p className="is-size-7-mobile is-size-5-tablet is-size-3-widescreen has-text-white has-text-centered sub-head text">
                        Help industry AI , Towards a new era of intelligence
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BackgroundImageSwitch>
    </div>
  );
};
Banner.propTypes = {
  info: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string
  })
};

export default Banner;
