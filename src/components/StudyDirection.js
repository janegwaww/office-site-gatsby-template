import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

function StudyDirection({ heading = "", dir = [] }) {
  return (
    <div className="columns">
      <div className="column is-10 is-offset-1 has-text-centered">
        <h3 className="title is-size-2 has-text-weight-bold">{heading}</h3>
        <div className="section">
          <div
            className="level"
            style={{ borderBottom: "1px solid rgba(232,232,232,1)" }}
          >
            <div
              className="is-active level-left"
              style={{ borderBottom: "2px solid rgba(12,102,255,1)" }}
            >
              <div>
                <p className="image is-96x96" style={{ margin: "auto" }}>
                  <img src={"./img/college/study1-chosen.png"} />
                </p>
                <br />
                <a>神经网络结构进化策略</a>
              </div>
            </div>
            <div className="level-item">
              <div>
                <p className="image is-96x96" style={{ margin: "auto" }}>
                  <img src={"./img/college/study2.png"} />
                </p>
                <br />
                <a>信息智能</a>
              </div>
            </div>
            <div className="level-right">
              <div>
                <p className="image is-96x96" style={{ margin: "auto" }}>
                  <img src={"./img/college/study3.png"} />
                </p>
                <br />
                <a>推衍引擎</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container has-text-left">
          <p className="title">神经网络架构搜索</p>
          <p className="is-size-4">网络结构进化策略</p>
          <br />
          <p>
            构建全自动化的机器学习算法超参数调节及结构设计机制，结合经典算法（e.g.，Random
            Search, Bayesian Optimization, Evolutionary Algorithm,
            etc），实现深度学习模型的全自动设计流程；包括根据业务场景属性进行自动化特征提取及整合方法（feature
            boosting, Zhengqi_et_al 2019）
          </p>
          <br />
          <br />
          <p className="is-size-4">模型融合</p>
          <br />
          <p>
            针对业务场景数据的特性，利用多种模型融合方式，例如：ensemble、voting等方式，最大化提升模型组合性能；针对不同的模型结构设计专属的模型融合方式，为机器学习算法的全面自动化做铺垫；除了考虑个体学习器之间是否相互依赖以制定模型融合的机制，也考虑场景模型的层次化逻辑以进行分层次的融合（Hierarchical
            Conceptual Model）从而实现场景针对性的模型融合方案。
          </p>
        </div>
      </div>
    </div>
  );
}

StudyDirection.propTypes = {
  heading: PropTypes.string,
  dir: PropTypes.array
};

export default StudyDirection;
