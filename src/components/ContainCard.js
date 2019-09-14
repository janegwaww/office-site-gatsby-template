import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const ContainCard = ({ info = {} }) => {
  info =
    info.length === 0
      ? info
      : {
          image: "./img/seeker.png",
          ale: "seeker",
          heading: "变量引擎",
          description:
            "全面闭环的自动化机器学习引擎。给定某业务场景，输入该 场景各个变量的历史数据，变量引擎即能根据历史数据进行自主学习，挖掘出深 层次的场景知识，形成变量之间的关联图谱。依托关联图谱，客户可对部分变量 进行赋值，图谱便可对未被赋值的变量进行实时预测，实现渗透式的场景数据/变量深度挖掘。",
          button: "了解更多"
        };
  return (
    <div className="has-background-white">
      <article className="media">
        <figure className="media-left">
          <p className="image is-256x256">
            <PreviewCompatibleImage imageInfo={info} />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong className="is-size-3">{info.heading}</strong>
              <br />
              <br />
              {info.description}
            </p>
          </div>
          <br />
          <a href="./" className="button">
            {info.button}
          </a>
        </div>
      </article>
    </div>
  );
};

ContainCard.propTypes = {
  info: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    alt: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
    button: PropTypes.string
  })
};

export default ContainCard;
