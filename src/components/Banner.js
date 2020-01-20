import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "gatsby-plugin-intl";
import LinesEllipsis from "react-lines-ellipsis";

function Banner({ info = {} }) {
  const [background, setBackground] = useState("/img/index-banner.png");
  const [height, setHeight] = useState("570px");
  const [col, setCol] = useState("is-two-fifths");
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setBackground("/img/index-banner-mobile.png");
      setHeight("190px");
      setCol("is-7");
    }
  }, []);
  return (
    <div className="index-banner">
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${background})`,
          height: `${height}`,
          backgroundColor: `white`,
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <div className="container">
          <div className="columns is-mobile">
            <div className="column is-10 is-offset-1">
              <div className="columns is-mobile">
                <div className={`column ${col}`}>
                  <div className="banner-title">
                    <div className="content">
                      <p className="is-size-5-5-mobile is-size-2-tablet is-size-2-widescreen has-text-white">
                        {`${info.heading}`}
                      </p>
                    </div>
                    <div className="content">
                      <LinesEllipsis
                        className="is-size-7-mobile is-size-5-tablet is-size-5-widescreen has-text-white"
                        text={`${info.description}`}
                        maxLine="3"
                        style={{ hyphens: "auto" }}
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
      </div>
    </div>
  );
}
Banner.propTypes = {
  info: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string
  })
};

export default Banner;
