import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const ContainCard = ({ info = {} }) => {
  return (
    <div className="has-background-white">
      <div
        className="card is-horizontal"
        style={{ display: "flex", boxShadow: "unset" }}
      >
        <div className="card-image" style={{ width: "100%", height: "100%" }}>
          <figure className="image">
            <PreviewCompatibleImage
              imageInfo={{ ...info, style: { borderRadius: "unset" } }}
            />
          </figure>
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-size-3">{info.heading}</p>
              </div>
            </div>
            <div className="content is-size-6 has-text-grey-light">
              {info.description}
            </div>
            {info.button && (
              <a href="#top" className="button">
                {info.button}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ContainCard.propTypes = {
  info: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    alt: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
    button: PropTypes.string
  })
};

export default ContainCard;
