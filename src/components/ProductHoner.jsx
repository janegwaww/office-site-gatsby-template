import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

function ProductHoner({ honerInfo = {} }) {
  return (
    <div>
      <div className="columns">
        <div className="column is-12">
          <PreviewCompatibleImage imageInfo={honerInfo} />
        </div>
      </div>
    </div>
  );
}

ProductHoner.propTypes = {
  honerInfo: PropTypes.object
};

export default ProductHoner;
