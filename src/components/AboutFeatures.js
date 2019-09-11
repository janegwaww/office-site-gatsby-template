import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

function AboutFeatures({ features = [] }) {
  const imageStyle = {
    width: "156px",
    height: "156px",
    margin: "auto"
  };
  return (
    <div>
      <div className="columns is-multiline is-variable is-6">
        {features.length === 0
          ? null
          : features.map((o, i) => (
              <div
                className="column is-4 has-text-centered"
                key={i}
                style={{ padding: "0.5em 3em", marginTop: "2em" }}
              >
                <div style={imageStyle}>
                  <PreviewCompatibleImage imageInfo={o} />
                </div>
                <p
                  className="has-text-weight-bold is-size-5"
                  style={{ padding: "1em 0" }}
                >
                  {o.heading}
                </p>
                <p className="has-text-grey" style={{ padding: "0 .8em" }}>
                  {o.text}
                </p>
              </div>
            ))}
      </div>
    </div>
  );
}

AboutFeatures.propTypes = {
  features: PropTypes.array
};

export default AboutFeatures;
