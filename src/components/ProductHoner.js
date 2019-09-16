import React from "react";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

function ProductHoner() {
  return (
    <div>
      <div className="columns">
        <div className="column is-12">
          <PreviewCompatibleImage
            imageInfo={{
              image: "./img/product/pro5.png",
              alt: "product features"
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductHoner;
