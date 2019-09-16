import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

function ProductAdvantages({ advInfo = {} }) {
  const items = advInfo.blurbs;
  return (
    <div>
      <div className="columns">
        <div className="column is-12">
          <h3 className="has-text-centered">{advInfo.heading}</h3>
          <br />
          <div className="columns is-multiline is-variable is-8">
            {items.map((o, i) => (
              <div
                className="column is-4 has-text-centered"
                key={i}
                style={{ padding: "1rem 4rem" }}
              >
                <div className="image is-64x64" style={{ margin: "auto" }}>
                  <PreviewCompatibleImage imageInfo={o} />
                </div>
                <br />
                <h6>{o.heading}</h6>
                <p className="is-size-7">{o.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

ProductAdvantages.propTypes = {
  advInfo: PropTypes.shape({
    blurbs: PropTypes.array,
    heading: PropTypes.string
  })
};

export default ProductAdvantages;
