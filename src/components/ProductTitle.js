import React from "react";
import PropTypes from "prop-types";

function ProductTitle() {
  return (
    <div
      style={{
        display: "flex",
        height: "150px",
        lineHeight: "1",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
        padding: "0 5em"
      }}
    >
      <div className="columns">
        <div className="column is-half">
          <h3
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-3-widescreen"
            style={{
              /* boxShadow: */
              /*   "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px", */
              /* backgroundColor: "rgb(255, 68, 0)", */
              color: "white",
              lineHeight: "1",
              padding: "0.25em 0"
            }}
          >
            {`黑顿算法模块变量引擎 Seeker`}
          </h3>
          <h6
            className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-6-widescreen"
            style={{
              /* boxShadow: */
              /*   "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px", */
              /* backgroundColor: "rgb(255, 68, 0)", */
              color: "white",
              lineHeight: "1",
              padding: "0.5em 0em"
            }}
          >
            {`全面闭环的自动化机器学习平台。给定某业务场景，输入该场景各个变量的历史数据，变量引擎即能根据历史数据进行自主学习，挖掘出深层次的场景知识，形成变量之间的关联图谱。依托关联图谱，客户可对部分变量进行赋值，图谱便可对未被赋值的变量进行实时预测，实现渗透式的场景数据/变量深度挖掘。`}
          </h6>
          <div className="columns is-gapless" style={{ padding: "0.25em 0" }}>
            <div className="column is-3">
              <a className="button is-link" href="#">
                立即使用
              </a>
            </div>
            <div className="column is-3 has-text-left">
              <a
                className="button"
                href="#"
                style={{ backgroundColor: "transparent", color: "white" }}
              >
                业务方案咨询
              </a>
            </div>
            <div className="column is-6 has-text-centered">
              <a
                className="button is-text "
                href="#"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  border: "unset"
                }}
              >
                帮助文档{">"}
              </a>
            </div>
          </div>
        </div>
        <div className="column is-half">
          <a></a>
        </div>
      </div>
    </div>
  );
}

ProductTitle.propTypes = {
  titleInfo: PropTypes.object
};

export default ProductTitle;
