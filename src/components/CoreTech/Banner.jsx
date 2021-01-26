import React from "react";
import BackgroundImageSwitch from "../BackgroundImageSwitch";

const Banner = ({ image, intro = {} }) => {
  return (
    <div className="coretech-banner">
      <BackgroundImageSwitch
        switchHeight={["500px", "400px"]}
        images={[{ image: image }, { image: image }]}
      >
        <div
          className="banner-background"
          style={{
            background: `url(${intro.image.childImageSharp.fluid.src}) top 50% right 20% / auto 60% no-repeat`
          }}
        />
        <div className="container">
          <div className="columns is-mobile">
            <div className="column is-10 is-offset-1">
              <div className="columns is-mobile">
                <div className="column is-three-fifths-tablet is-8-mobile">
                  <div className="banner-title">
                    <div className="content">
                      <p className="is-size-5-5-mobile is-size-5-tablet is-size-2-widescreen has-text-white">
                        {intro.title}
                      </p>
                    </div>
                    <div className="content">
                      <p className="has-text-white">{intro.context}</p>
                    </div>
                    <br />
                    <div className="content">
                      <a
                        href="http://seeker.haetek.com/#/"
                        className="button is-blue is-size-7-5-mobile"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        合作咨询
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

export default Banner;
