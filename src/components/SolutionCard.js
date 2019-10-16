import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const SolutionCard = ({ info = {} }) => {
  const [columnSize, setColumnSize] = useState(["is-half", "is-half"]);
  const [imgInfo, setImgInfo] = useState({ image: info.image2, alt: info.alt });
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setColumnSize(["is-two-fifth", "is-three-fifth"]);
      setMobile(true);
    } else {
      setImgInfo({ image: info.image1, alt: info.alt });
    }
  }, []);
  return (
    <div
      className="solution-card  has-background-white"
      style={{
        padding: 0,
        borderRadius: "4px",
        overflow: "hidden",
        margin: mobile ? "8px" : "2rem"
      }}
    >
      <div className="columns is-gapless">
        <div className={`column ${columnSize[0]}`}>
          <div className="container">
            <figure className="image has-background-grey-light">
              <PreviewCompatibleImage
                imageInfo={{ ...imgInfo, style: { borderRadius: "none" } }}
              />
            </figure>
          </div>
        </div>
        <div
          className={`column ${columnSize[1]} has-background-white`}
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center"
          }}
        >
          <div className="section solution-card-right">
            <div className="content has-text-centered-mobile">
              <p className="content is-size-4 is-size-6-mobile">
                {info.heading}
              </p>
              <LinesEllipsis
                style={{
                  minHeight: "72px",
                  maxHeight: "144px",
                  overflow: "hidden"
                }}
                className="content is-size-6 is-size-7-mobile has-text-grey has-text-left"
                text={`${info.description}`}
                maxLine={mobile ? "4" : "5"}
                ellipsis="..."
              />
            </div>
            <a className="button is-blue is-size-6 is-size-7-mobile">
              查看详情
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

SolutionCard.propTypes = {
  info: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    alt: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string
  })
};

export default SolutionCard;
