import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

function SeekerTabs({ scrollItems }) {
  return (
    <div>
      <div className="tabs is-centered is-fullwidth">
        <ul>
          <li className="is-active">
            <a href="/">变量引擎</a>
          </li>
          <li>
            <a href="/">匹配规划</a>
          </li>
          <li>
            <a href="/">信息智能</a>
          </li>
          <li>
            <a href="/">数据协议</a>
          </li>
          <li>
            <a href="/">智能操作生态</a>
          </li>
        </ul>
      </div>
      <div className="columns">
        <div className="column is-5">
          <PreviewCompatibleImage
            imageInfo={{
              image: "/img/seeker.png",
              alt: `seeler`
            }}
          />
        </div>
        <div className="column is-7 has-text-justified">
          <h3 className="has-text-weight-bold is-size-6">变量引擎</h3>
          <p>
            全面闭环的自动化机器学习引擎。给定某业务场景，输入该
            场景各个变量的历史数据，变量引擎即能根据历史数据进行自主学习，挖掘出深
            层次的场景知识，形成变量之间的关联图谱。依托关联图谱，客户可对部分变量
            进行赋值，图谱便可对未被赋值的变量进行实时预测，实现渗透式的场景数据/变量深度挖掘。
          </p>
          <a className="button">了解更多</a>
        </div>
      </div>
    </div>
  );
}

export default SeekerTabs;
