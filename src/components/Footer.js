import React from "react";
import { Link } from "gatsby";
import qr from "../img/qrcode.png";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-dark has-text-white-ter">
        <div className="content has-text-centered has-background-dark has-text-white-ter">
          <div className="container has-background-dark has-text-white-ter">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="footer-guide columns is-gapless is-centered">
                  <div className="column is-3">
                    <section className="menu">
                      <ul className="menu-list">
                        <li>
                          <p className="menu-label-f">使用指南</p>
                        </li>
                        <li>
                          <Link to="/" className="navbar-item">
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
                          <p className="menu-label-f">友情链接</p>
                        </li>
                        <li>
                          <Link className="navbar-item" to="/">
                            中科院
                          </Link>
                        </li>
                        <li>
                          <Link className="navbar-item" to="/">
                            阿里云
                          </Link>
                        </li>
                        <li>
                          <Link className="navbar-item" to="/">
                            腾讯云
                          </Link>
                        </li>
                      </ul>
                    </section>
                  </div>
                  <div className="column is-3">
                    <section>
                      <ul className="menu-list">
                        <li>
                          <p className="menu-label-f">联系我们</p>
                        </li>
                        <li>
                          <Link className="navbar-item" to="/">
                            联系客服：
                          </Link>
                          0755-28713646
                        </li>
                        <li>
                          <Link className="navbar-item" to="/">
                            反馈意见：
                          </Link>
                          www.haetek.com
                        </li>
                      </ul>
                    </section>
                  </div>
                  <div className="column is-4">
                    <p className="image is-128x128" style={{ margin: "auto" }}>
                      <img src={qr} alt="heatex-qrcode" />
                    </p>
                    <p>黑顿科技</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content  has-background-black is-size-6 has-text-grey">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="columns">
                  <div className="column is-half">
                    <p className="bd-notification is-primary">IT支持</p>
                  </div>
                  <div className="column is-half  has-text-grey">
                    <p className="bd-notification is-primary">
                      版权所有@黑顿科技有限公司 2019 保留一切权利
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
