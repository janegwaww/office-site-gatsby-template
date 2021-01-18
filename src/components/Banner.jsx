import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "gatsby-plugin-intl";
import LinesEllipsis from "react-lines-ellipsis";
import BackgroundImageSwitch from "../components/BackgroundImageSwitch";

const Banner = ({ info = {} }) => {
  return (
    <div className="index-banner">
      <BackgroundImageSwitch
        switchHeight={["1000px", "190px"]}
        images={[
          { image: "/img/index-banner.png" },
          { image: "/img/index-banner-mobile.png" }
        ]}
      >
        <div className="container">
          <div className="columns is-mobile">
            <div className="column is-10 is-offset-1">
              <div className="columns is-mobile">
                <div className={`column is-two-fifths-tablet is-7-mobile`}>
                  <div className="banner-title">
                    <div className="content">
                      <p className="is-size-5-5-mobile is-size-5-tablet is-size-2-widescreen has-text-white">
                        {`${info.heading}`}
                      </p>
                    </div>
                    <div className="content">
                      <LinesEllipsis
                        className="is-size-7-mobile is-size-5-tablet is-size-5-widescreen has-text-white"
                        text={`${info.description}`}
                        maxLine="3"
                        style={{ hyphens: "auto", whiteSpace: "pre-wrap" }}
                      />
                    </div>
                    <div className="content">
                      <a
                        href="http://seeker.haetek.com/#/"
                        className="button is-opacity is-size-7-5-mobile"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FormattedMessage id="home.learnseeker" />
                      </a>
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
