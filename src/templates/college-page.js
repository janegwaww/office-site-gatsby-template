import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const colObje = [
  {
    img: "./img/college2.png",
    dir: "方向一：神经网络架构搜索（Neural Search Architecture）",
    list: "1.网络结构进化策略： 2.模型融合："
  },
  {
    img: "./img/college2.png",
    dir: "方向二：信息智能（InfoPlus）",
    list: "1.文本解析： 2.语法纠错： 3.语义理解："
  },
  {
    img: "./img/college2.png",
    dir: "方向三：推理引擎（Inference Engine）",
    list: "1.逻辑图谱 2.知识表征"
  },
  {
    img: "./img/college2.png",
    dir: "方向四：信息智能（InfoPlus）",
    list: "1.网络结构进化策略：2.模型融合："
  }
];
const CollegeTemplate = ({ itemInfo }) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${"./img/college.png"})`,
        backgroundPosition: `0 55px`,
        backgroundAttachment: `fixed`,
        backgroundColor: `gray`,
        backgroundSize: "contain"
      }}
    />
    <div
      className="section section--gradient"
      style={{ background: "rgba(245,245,245,1)" }}
    >
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1 has-text-centered">
              <h3 className=" is-size-4 has-text-weight-bold">学术背景</h3>
              <br />
              <div className="is-size-7">
                <p>
                  黑顿研究院汇聚了世界各地致力于将人工智能领域的技术投放到生活的专家及青年研究者，
                </p>
                <p>
                  来自被称为深度学习发源地的多伦多大学、csranking人工智能领域世界排名第一的卡耐基梅隆大学、中国科学院计算技术研究所等国内外权威学术机构。
                </p>
                <p>
                  黑顿研究院兼顾理论型及工程型研究，摒弃“leaderboard”等以刷指标、博眼球为履行自身价值观的唯一渠道的研究模式，
                </p>
                <p>着重于将算法技术落地化、场景化、实质化、深远化。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1 has-text-centered">
              <h3 className=" is-size-4 has-text-weight-bold">研究方向</h3>
              <br />
              <div className="columns is-multiline">
                {colObje.map((o, i) => (
                  <div className="column is-half" key={i}>
                    <div className="columns is-gapless">
                      <div className="column is-5">
                        <PreviewCompatibleImage
                          imageInfo={{ image: o.img, alt: "college" }}
                        />
                      </div>
                      <div className="column is-7 has-text-left">
                        <p className="is-size-6">{o.dir}</p>
                        <br />
                        <p className="is-size-7 ">{o.list}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const College = () => (
  <Layout>
    <CollegeTemplate />
  </Layout>
);

College.propTypes = {
  itemInfo: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string
  })
};

export default College;
