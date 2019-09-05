import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const AboutUs = ({ itemInfo }) => (
  <div className="columns">
    <div className="column is-12">
      <div className="columns">
        <div className="column is-two-fifths">
          <h4 className="has-text-weight-semibold is-size-3">
            {itemInfo.heading}
          </h4>
          <p style={{ fontSize: ".75rem" }}>{itemInfo.description}</p>
        </div>
        <div className="column is-three-fifths">
          <PreviewCompatibleImage
            imageInfo={{
              image: "/img/chemex.jpg",
              alt: `profile`
            }}
          />
        </div>
      </div>
    </div>
  </div>
);

AboutUs.propTypes = {
  itemInfo: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string
  })
};

export default AboutUs;
