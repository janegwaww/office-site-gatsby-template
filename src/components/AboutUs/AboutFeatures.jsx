import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

function AboutFeatures({ features = [] }) {
  return (
    <div>
      <div
        className={`columns is-multiline is-variable is-2 is-mobile is-centered`}
      >
        {features &&
          features.map((o, i) => (
            <div
              className={`column is-half-mobile is-one-thirds-tablet has-text-centered`}
              style={{ marginTop: "1.8em" }}
              key={i}
            >
              <div className="content">
                <figure
                  className={`image is-128x128 is-96x96-mobile has-text-centered`}
                  style={{ margin: "0 auto 1em" }}
                >
                  <PreviewCompatibleImage imageInfo={o} />
                </figure>
                <p className="is-size-5 is-size-6-mobile">{o.heading}</p>
                <p
                  className="is-size-7-mobile"
                  style={{
                    margin: "auto",
                    color: "#666",
                    maxWidth: "350px",
                    hyphens: "auto"
                  }}
                >
                  {o.text}
                </p>
              </div>
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
