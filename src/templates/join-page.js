import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const joinObj = [
  {
    title: "医学AI算法研究院",
    date: "深圳 | 技术 | 2019年09月02日",
    des:
      "负责腾讯云视觉AI相关产品的商业化落地，丰富AI产品能力矩阵，拥抱产业互联网，赋能各行业合作伙伴； 负责基于AI实验室引擎模型基础上的高效AI开放平台能力建设，高效率低成本的持续引入优质AI能力……"
  },
  {
    title: "医学AI算法研究院",
    date: "深圳 | 技术 | 2019年09月02日",
    des:
      "负责腾讯云视觉AI相关产品的商业化落地，丰富AI产品能力矩阵，拥抱产业互联网，赋能各行业合作伙伴； 负责基于AI实验室引擎模型基础上的高效AI开放平台能力建设，高效率低成本的持续引入优质AI能力……"
  },
  {
    title: "医学AI算法研究院",
    date: "深圳 | 技术 | 2019年09月02日",
    des:
      "负责腾讯云视觉AI相关产品的商业化落地，丰富AI产品能力矩阵，拥抱产业互联网，赋能各行业合作伙伴； 负责基于AI实验室引擎模型基础上的高效AI开放平台能力建设，高效率低成本的持续引入优质AI能力……"
  },
  {
    title: "医学AI算法研究院",
    date: "深圳 | 技术 | 2019年09月02日",
    des:
      "负责腾讯云视觉AI相关产品的商业化落地，丰富AI产品能力矩阵，拥抱产业互联网，赋能各行业合作伙伴； 负责基于AI实验室引擎模型基础上的高效AI开放平台能力建设，高效率低成本的持续引入优质AI能力……"
  }
];
const JoinTemplate = ({ itemInfo }) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        height: "450px",
        backgroundImage: `url(${
          /* !!image ? image.childImageSharp.fluid.src : image */
          `/img/join.png`
        })`,
        backgroundAttachment: `fixed`,
        backgroundSize: "contain"
      }}
    />
    <div className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-10">
            <div className="field">
              <div className="control has-icons-left">
                <input
                  className="input is-medium"
                  type="email"
                  style={{ backgroundColor: "#E8E8E8" }}
                  placeholder="搜索工作岗位"
                />
                {/* <span className="icon is-medium is-left"> */}
                {/*   <i className="fas fa-envelope"></i> */}
                {/* </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section" style={{ background: "rgba(247,247,247,1)" }}>
      <div className="container has-text-left">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div className="columns">
                <div className="column is-4">
                  <p className="has-text-weight-bold">过滤条件</p>
                  <div
                    style={{
                      width: "280px",
                      height: "327px",
                      background: "rgba(255,255,255,1)",
                      borderRadius: "4px",
                      padding: "1em .2em"
                    }}
                  >
                    <aisde className="menu">
                      <ul className="menu-list">
                        <li>
                          <label className="checkbox">
                            <input type="checkbox" />
                            技术
                          </label>
                          <ul style={{ listStyleType: "none" }}>
                            <li>
                              <label className="checkbox">
                                <input type="checkbox" />
                                技术研发类
                              </label>
                            </li>
                            <li>
                              <label className="checkbox">
                                <input type="checkbox" />
                                机器学习方向
                              </label>
                            </li>
                            <li>
                              <label className="checkbox">
                                <input type="checkbox" />
                                自然语言处理方向
                              </label>
                            </li>
                            <li>
                              <label className="checkbox">
                                <input type="checkbox" />
                                智能语言方向
                              </label>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </aisde>
                    <aside className="menu">
                      <ul className="menu-list">
                        <li>
                          <label className="checkbox">
                            <input type="checkbox" />
                            用户体验
                          </label>
                          <ul style={{ listStyleType: "none" }}>
                            <li>
                              <label className="checkbox">
                                <input type="checkbox" />
                                UI设计
                              </label>
                            </li>
                            <li>
                              <label className="checkbox">
                                <input type="checkbox" />
                                UX设计
                              </label>
                            </li>
                            <li>
                              <label className="checkbox">
                                <input type="checkbox" />
                                UE交互设计
                              </label>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </aside>
                  </div>
                </div>
                <div className="column is-8">
                  <p className="has-text-weight-bold">最新发布</p>
                  {joinObj.map((o, i) => (
                    <div
                      style={{
                        /* width: "836px", */
                        height: "223px",
                        background: "rgba(255,255,255,1)",
                        borderRadius: "4px",
                        marginBottom: "1em",
                        padding: "1em 1em"
                      }}
                      key={i}
                    >
                      <h4>{o.title}</h4>
                      <p>{o.date}</p>
                      <br />
                      <p>{o.des}</p>
                    </div>
                  ))}
                  <nav
                    className="pagination is-small"
                    role="navigation"
                    aria-label="pagination"
                  >
                    <a className="pagination-previous">Previous</a>
                    <a className="pagination-next">Next page</a>
                    <ul
                      className="pagination-list"
                      style={{ listStyleType: "none" }}
                    >
                      <li>
                        <a className="pagination-link" aria-label="Goto page 1">
                          1
                        </a>
                      </li>
                      <li>
                        <span className="pagination-ellipsis">&hellip;</span>
                      </li>
                      <li>
                        <a
                          className="pagination-link"
                          aria-label="Goto page 45"
                        >
                          45
                        </a>
                      </li>
                      <li>
                        <a
                          className="pagination-link is-current"
                          aria-label="Page 46"
                          aria-current="page"
                        >
                          46
                        </a>
                      </li>
                      <li>
                        <a
                          className="pagination-link"
                          aria-label="Goto page 47"
                        >
                          47
                        </a>
                      </li>
                      <li>
                        <span className="pagination-ellipsis">&hellip;</span>
                      </li>
                      <li>
                        <a
                          className="pagination-link"
                          aria-label="Goto page 86"
                        >
                          86
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Join = () => (
  <Layout>
    <JoinTemplate />
  </Layout>
);

Join.propTypes = {
  itemInfo: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string
  })
};

export default Join;
