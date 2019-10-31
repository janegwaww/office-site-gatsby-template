import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage.js";

const ProductMethodTitle = ({ method }) => (
  <div className="product-method-title">
    <div className="product-method-head has-margin-bottom-30">
      <figure className="image is-48x48">
        <PreviewCompatibleImage imageInfo={method} />
      </figure>
      &ensp;&ensp;
      <div className="is-size-4">{method.heading}</div>
    </div>
    <div
      className="is-size-6-5 has-text-666"
      style={{ lineHeight: "26px", letterSpacing: "1px" }}
    >
      {method.description.split("/").map((o, i) => (
        <div key={i}>{o}</div>
      ))}
    </div>
  </div>
);

ProductMethodTitle.defaultProps = {
  method: {
    heading: "product method heading",
    description: "product method detail description!",
    alt: "product method icon",
    image: "./img/product/features1.png"
  }
};

ProductMethodTitle.propTypes = {
  method: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    alt: PropTypes.string,
    image: PropTypes.object
  })
};

export default ProductMethodTitle;
