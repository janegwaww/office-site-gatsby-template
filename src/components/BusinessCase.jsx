import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

function BusinessCase() {
  const caseObj = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <div className="columns">
        <div className="column is-5">
          <h4 className="has-text-weight-bold is-size-5">中国科学院</h4>
          <p>
            中国科学院（英文名称：Chinese Academy of
            Sciences，简称中科院）成立于1949年11月，为中国自然科学最高学术机构、科学技术最高咨询机构、自然科学与高技术综合研究发展中心。
          </p>
          <br />
          <p>
            <img src={`./img/check.png`} />
            <span className="has-text-weight-bold">打造智能知识库：</span>:
            提供标准知识库外，持续挖掘用户与机器人客服的历史会话进 行自主学习
          </p>
          <br />
          <p>
            <img src={`./img/check.png`} />
            <span className="has-text-weight-bold">体验提升:</span>:
            选取CDN体验更好，用户感受得到提升
          </p>
          <br />
          <p>相关产品</p>
          <div>
            <span style={{ marginRight: "20px" }}>自然语言学习</span>
            <span style={{ marginRight: "20px" }}>机器学习</span>
            <span style={{ marginRight: "20px" }}>深度学习</span>
          </div>
        </div>
        <div className="column is-7">
          <div className="columns is-multiline is-variable is-3">
            {caseObj.map((o, i) => (
              <div
                className="column is-4"
                /* style={{ boxShadow: "0px 4px 10px 0px rgba(0,0,0,0.1)" }} */
              >
                <PreviewCompatibleImage
                  imageInfo={{
                    image: `./img/case${o}.png`,
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
