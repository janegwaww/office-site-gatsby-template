import React from "react";
import PropTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const SolutionCard = ({ info = {} }) => {
  return (
    <div
      className="solution-card box has-background-white"
      style={{
        padding: 0,
        overflow: "hidden",
        boxShadow: "0px 4px 10px 0px rgba(0,0,0,0.1)"
      }}
    >
      <div className="columns is-gapless">
        <div className="column is-half">
          <div className="container">
            <figure className="image has-background-grey-light">
              <PreviewCompatibleImage
                imageInfo={{ ...info, style: { borderRadius: "none" } }}
              />
            </figure>
          </div>
        </div>
        <div
          className="column is-half has-background-white"
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center"
          }}
        >
          <div className="section solution-card-right">
            <div className="content has-text-centered-mobile">
              <p className="content is-size-4 is-size-5-5-mobile">
                {info.heading}
              </p>
              <LinesEllipsis
                style={{ height: "144px" }}
                className="content is-size-6 is-size-6-5-mobile has-text-grey has-text-left"
                text={`${info.description}`}
                maxLine="6"
                ellipsis="..."
              />
              <br className="is-hidden-mobile" />
              <a
                className="button is-blue is-size-6 is-size-7-mobile"
                style={{ width: "132px" }}
              >
                查看详情
              </a>
            </div>
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
