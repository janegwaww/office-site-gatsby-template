import React, { useState, useEffect } from "react";
import LinesEllipsis from "react-lines-ellipsis";

function Banner({ isMobile }) {
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
                        {`数据场景化搭建`}
                      </p>
                    </div>
                    <div className="content">
                      <LinesEllipsis
                        className="is-size-7-mobile is-size-5-tablet is-size-5-widescreen has-text-white"
                        text={`实现数据的按需汇聚，让应用像阳光，照亮业务场景的每个角落`}
                        maxLine="3"
                      />
                    </div>
                    <div className="content">
                      <a
                        href="http://seeker.haetek.com/#/"
                        className="button is-opacity is-size-7-5-mobile"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        了解Seeker
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

export default Banner;
