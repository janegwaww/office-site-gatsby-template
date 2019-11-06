import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage.js";

const ProductMethodTitle = ({method}) => (
  <div className="product-method-title">
    <div className="product-method-head has-margin-bottom-30 has-margin-bottom-15-mobile">
      <figure className="image is-48x48 is-30x30-mobile">
        <PreviewCompatibleImage
          imageInfo={{...method, style: {borderRadius: "unset"}}}
        />
      </figure>
      <div className="is-size-4 is-size-6-mobile">{method.heading}</div>
    </div>
    <div className="product-method-content is-size-6-5 has-text-666 is-size-7-mobile is-line-height-unset-mobile">
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
    image: "./img/product/features1.png",
  },
};

ProductMethodTitle.propTypes = {
  method: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    alt: PropTypes.string,
    image: PropTypes.object,
  }),
};

export default ProductMethodTitle;
