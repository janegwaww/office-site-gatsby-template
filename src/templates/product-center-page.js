import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const ProductCenterTemplate = ({ itemInfo }) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${"./img/product-center.png"})`,
        backgroundPosition: `0 55px`,
        backgroundAttachment: `fixed`,
        backgroundColor: `gray`,
        backgroundSize: `contain`
      }}
    >
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
                padding: "0.25em"
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
                padding: "0.25em"
              }}
            >
              {`全面闭环的自动化机器学习平台。给定某业务场景，输入该场景各个变量的历史数据，变量引擎即能根据历史数据进行自主学习，挖掘出深层次的场景知识，形成变量之间的关联图谱。依托关联图谱，客户可对部分变量进行赋值，图谱便可对未被赋值的变量进行实时预测，实现渗透式的场景数据/变量深度挖掘。`}
            </h6>
            <div className="columns" style={{ padding: "0.25em" }}>
              <div className="column is-4">
                <a className="button" href="#">
                  立即使用
                </a>
              </div>
              <div className="column is-4">
                <a className="button" href="#">
                  业务方案咨询
                </a>
              </div>
              <div className="column is-4">
                <a className="has-text-white" href="#">
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
    </div>
    <section style={{ backgroundColor: "black" }}>
      <div className="tabs is-centered ">
        <ul>
          <li className=" is-active">
            <a href="#" className="">
              产品功能
            </a>
          </li>
          <li className="">
            <a href="#" className="has-text-white">
              产品优势
            </a>
          </li>
          <li className="">
            <a href="#" className="has-text-white">
              解决方案架构
            </a>
          </li>
          <li className="">
            <a href="#" className="has-text-white">
              多项架构图
            </a>
          </li>
          <li className="">
            <a href="#" className="has-text-white">
              应用场景
            </a>
          </li>
          <li className="">
            <a href="#" className="has-text-white">
              内部实践
            </a>
          </li>
          <li className="">
            <a href="#" className="has-text-white">
              荣誉与成就
            </a>
          </li>
          <li className="">
            <a href="#" className="has-text-white">
              使用步骤
            </a>
          </li>
        </ul>
      </div>
    </section>
    <section style={{ backgroundColor: "#F5F5F5" }}>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="columns">
                  <div className="column is-12">
                    <h4 className="has-text-centered">产品功能</h4>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: "./img/pro1.png",
                        alt: "product features"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="columns">
                  <div className="column is-12">
                    <h4 className="has-text-centered">产品优势</h4>
                    <div className="columns is-multiline">
                      <div className="column is-4 has-text-centered">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: "./img/pre1.png",
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
                            image: "./img/pre2.png",
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
                            image: "./img/pre3.png",
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
                            image: "./img/pre4.png",
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
                            image: "./img/pre5.png",
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
                            image: "./img/pre6.png",
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
            </div>
          </div>
        </div>
      </div>
    </section>
    <section style={{ backgroundColor: "#F5F5F5" }}>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="columns">
                  <div className="column is-12">
                    <h4 className="has-text-centered">方案架构</h4>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: "./img/pro2.png",
                        alt: "product features"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section style={{ backgroundColor: "white" }}>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="columns">
                  <div className="column is-12">
                    <h4 className="has-text-centered">解决方案</h4>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: "./img/pro3.png",
                        alt: "product features"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section style={{ backgroundColor: "#F5F5F5" }}>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="columns">
                  <div className="column is-12">
                    <h4 className="has-text-centered">应用场景</h4>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: "./img/pro4.png",
                        alt: "product features"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section style={{ backgroundColor: "white" }}>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="columns">
                  <div className="column is-12">
                    <h4 className="has-text-centered">产品功能</h4>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: "./img/pro5.png",
                        alt: "product features"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const ProductCenter = () => (
  <Layout>
    <ProductCenterTemplate />
  </Layout>
);

ProductCenter.propTypes = {
  itemInfo: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string
  })
};

export default ProductCenter;
