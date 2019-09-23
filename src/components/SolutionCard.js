import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const SolutionCard = ({ info = {} }) => {
  return (
    <div
      className=" has-background-white"
      style={{
        borderRadius: "5px",
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
        <div className="column is-half has-background-white">
          <div className="section">
            <div className="container">
              <p className="title is-size-3 is-size-4-mobile">{info.heading}</p>
              <p className="content is-size-6 has-text-grey">
                {info.description}
              </p>
              <a
                href="#top"
                className="button is-link is-medium is-size-6-mobile"
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
