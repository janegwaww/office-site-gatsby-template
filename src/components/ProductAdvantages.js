import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

function ProductAdvantages({ advInfo = [] }) {
  return (
    <div>
      <div className="columns">
        <div className="column is-12">
          <h3 className="has-text-centered">产品优势</h3>
          <br />
          <div className="columns is-multiline .is-variable is-6">
            <div className="column is-4 has-text-centered">
              <PreviewCompatibleImage
                imageInfo={{
                  image: "./img/product/pre1.png",
                  alt: "preview 1"
                }}
              />
              <h6>优势1号</h6>
              <p className="is-size-7">
                训练集源于黑顿核心业务，精细标注、多轮迭代，覆盖多种场景，服务更可靠
              </p>
            </div>
            <div className="column is-4 has-text-centered">
              <PreviewCompatibleImage
                imageInfo={{
                  image: "./img/product/pre2.png",
                  alt: "preview 1"
                }}
              />
              <h6>优势2号</h6>
              <p className="is-size-7">
                训练集源于黑顿核心业务，精细标注、多轮迭代，覆盖多种场景，服务更可靠
              </p>
            </div>
            <div className="column is-4 has-text-centered">
              <PreviewCompatibleImage
                imageInfo={{
                  image: "./img/product/pre3.png",
                  alt: "preview 1"
                }}
              />
              <h6>优势3号</h6>
              <p className="is-size-7">
                训练集源于黑顿核心业务，精细标注、多轮迭代，覆盖多种场景，服务更可靠
              </p>
            </div>
            <div className="column is-4 has-text-centered">
              <PreviewCompatibleImage
                imageInfo={{
                  image: "./img/product/pre4.png",
                  alt: "preview 1"
                }}
              />
              <h6>优势4号</h6>
              <p className="is-size-7">
                训练集源于黑顿核心业务，精细标注、多轮迭代，覆盖多种场景，服务更可靠
              </p>
            </div>
            <div className="column is-4 has-text-centered">
              <PreviewCompatibleImage
                imageInfo={{
                  image: "./img/product/pre5.png",
                  alt: "preview 1"
                }}
              />
              <h6>优势5号</h6>
              <p className="is-size-7">
                训练集源于黑顿核心业务，精细标注、多轮迭代，覆盖多种场景，服务更可靠
              </p>
            </div>
            <div className="column is-4 has-text-centered">
              <PreviewCompatibleImage
                imageInfo={{
                  image: "./img/product/pre6.png",
                  alt: "preview 1"
                }}
              />
              <h6>优势6号</h6>
              <p className="is-size-7">
                训练集源于黑顿核心业务，精细标注、多轮迭代，覆盖多种场景，服务更可靠
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductAdvantages.propTypes = {
  advInfo: PropTypes.array
};

export default ProductAdvantages;
