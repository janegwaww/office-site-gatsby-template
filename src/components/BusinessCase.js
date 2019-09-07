import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

function BusinessCase() {
  const caseObj = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
  return (
    <div>
      <div className="columns">
        <div className="column is-5">
          <h4 className="has-text-weight-bold is-size-5">爱奇艺</h4>
          <p>
            爱奇艺是国内领先的视频内容平台，同时也是国内付费用户规模最大的平台之一。百度智能云支撑爱奇艺IT巨大的计算、存储、流量需求，帮助爱奇艺从一次性大笔投入重资产，变为分批租赁轻资产模式，加快交付速度，优化成本控制
          </p>
          <br />
          <p>
            <span className="has-text-weight-bold">降低成本</span>:
            改自建为租赁，通过系统算法动态选择更便宜的CDN
          </p>
          {/* <p>降低成本: 改自建为租赁，通过系统算法动态选择更便宜的CDN</p> */}
          {/* <p>降低成本: 改自建为租赁，通过系统算法动态选择更便宜的CDN</p> */}
          <br />
          <p>相关产品</p>
        </div>
        <div className="column is-7">
          <div className="columns is-multiline is-variable is-3">
            {caseObj.map((o, i) => (
              <div
                className="column is-4"
                style={{ boxShadow: "0px 4px 10px 0px rgba(0,0,0,0.1)" }}
              >
                <PreviewCompatibleImage
                  imageInfo={{
                    image: `/img/case${o}.png`,
                    alt: "case"
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessCase;
