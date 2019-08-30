import React from "react";
import { Link } from "gatsby";

import qr from "../img/qrcode.png";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns is-gapless is-centered">
              <div className="column is-3">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        新手指引
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        社区规则
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        帮助中心
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-3">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        行政大家谈
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        行政服务中心
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        行政案例中心
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        行政从业人员频道
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-3">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        联系客服：
                      </Link>
                      <Link className="navbar-item" to="/blog">
                        0755-28561111
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        反馈意见：
                      </Link>
                      <Link className="navbar-item" to="/contact">
                        amux@huawei.com
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <div className="content has-text-center">
                  <img
                    src={qr}
                    alt="heatex-qrcode"
                    style={{ width: "8em", height: "8em" }}
                  ></img>
                  <div>黑顿科技</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="version content has-background-block has-text-center"
          style={{ height: "50px" }}
        >
          <div>IT支持</div>
        </div>
      </footer>
    );
  }
};

export default Footer;
