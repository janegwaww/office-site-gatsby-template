import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

function ProductTabCard() {
  return (
    <div
      className="has-background-white"
      style={{ boxShadow: "0px 2px 10px 2px rgba(0,0,0,0.15)" }}
    >
      <div className="tabs has-text-weight-bold" style={{ marginBottom: 0 }}>
        <ul>
          <li class="is-active">
            <a>私有化部署</a>
          </li>
          <li>
            <a>高性能高吞吐</a>
          </li>
          <li>
            <a>合约安全审计</a>
          </li>
        </ul>
      </div>
      <div className="columns">
        <div className="column is-three-quarters">
          <div className="content " style={{ padding: "1.5rem 1.5rem" }}>
            <PreviewCompatibleImage
              imageInfo={{
                image: "./img/pro1.png",
                alt: "product features"
              }}
            />
          </div>
        </div>
        <div class="is-divider-vertical" style={{ padding: 0 }}></div>
        <div className="column is-one-quarters">
          <div className="content" style={{ padding: "1.5rem 1.5rem" }}>
            hello
          </div>
        </div>
      </div>
    </div>
  );
}

ProductTabCard.propTypes = {
  cardInfo: PropTypes.array
};

export default ProductTabCard;
