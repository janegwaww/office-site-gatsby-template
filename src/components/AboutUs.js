import React from "react";
import PropTypes from "prop-types";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const AboutUs = ({ itemInfo }) => (
  <div className="columns">
    <div className="column is-12">
      <h3 className="has-text-weight-semibold is-size-2">{itemInfo.heading}</h3>
      <p>{itemInfo.description}</p>
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
