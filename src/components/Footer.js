import React, { useState, useEffect } from "react";
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl";
import qr from "../img/qrcode.png";
import mobile from "../img/mobile-icon.svg";
import wechat from "../img/wechat-icon.svg";
import mail from "../img/mail-icon.svg";
import address from "../img/address-icon.svg";
import gov from "../img/gov.png";

const FooterMobile = () => (
  <div className="footer-mobile content is-hidden-tablet is-size-7-mobile has-text-centered">
    <div className="container">
      <p>
        <span
          className="tooltip has-tooltip-top"
          data-tooltip="haetek_20190801"
        >
          <FormattedMessage id="footer.officialaccount" />
        </span>
        &ensp;&ensp;|&ensp;&ensp;
        <span
          className="tooltip has-tooltip-top"
          data-tooltip="+86 156-4233-6090"
        >
          <FormattedMessage id="footer.marketingphone" />
        </span>
      </p>
      <p>peizhengqi@kc-group.com.cn</p>
      <p>
        <FormattedMessage id="footer.address" />
      </p>
    </div>
  </div>
);

const FooterBottom = ({ intl }) => {
  const [side, setSide] = useState("is-10 is-offset-1");
  const [center, setCenter] = useState("");
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setSide("is-11");
      setCenter("is-centered");
    }
  }, []);
  return (
    <div className="footer-bottom content has-background-black is-size-6 has-text-grey">
      <div className="container">
        <div className={`columns is-mobile ${center}`}>
          <div className={`column ${side}`}>
            <div className="level">
              <div className="level-left has-text-centered is-size-7-mobile">
                {intl.locale === "zh" ? (
                  <div className="gov-code">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span className="gov-icon image is-20x20 is-10x10-mobile">
                        <img src={gov} alt="gov" />
                      </span>
                      <a
                        className="bd-notification is-primary has-text-grey"
                        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030702002640"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        粤公网安备 44030702002640号
                      </a>
                    </div>
                    <div>
                      <span className="bd-notification is-primary has-text-grey">
                        粤ICP备19120979号-1
                      </span>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="level-right has-text-centered is-size-7-mobile">
                <p className="bd-notification is-primary">
                  <FormattedMessage id="footer.copyright" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = ({ intl }) => {
  const { formatMessage } = intl;
  const contantUsObj = [
    {
      index: "mobile",
      src: mobile,
      content: formatMessage({ id: "footer.mobile" })
    },
    {
      index: "wechat",
      src: wechat,
      content: "haetek_20190801"
    },
    {
      index: "mail",
      src: mail,
      content: "peizhengqi@kc-group.com.cn"
    },
    {
      index: "address",
      src: address,
      content: formatMessage({ id: "footer.address" })
    }
  ];
  const intro = [
    {
      index: "help",
      name: formatMessage({ id: "footer.helpcenter" })
    },
    {
      index: "zhongkeyuan",
      name: formatMessage({ id: "footer.ict" })
    },
    {
      index: "aliyun",
      name: formatMessage({ id: "footer.alicloud" })
    },
    {
      index: "tensentclound",
      name: formatMessage({ id: "footer.qcloud" })
    }
  ];
  return (
    <footer className="footer has-background-dark has-text-white-ter">
      <FooterMobile />
      <div className="content footer-above has-text-centered has-background-dark has-text-white-ter is-hidden-mobile">
        <div className="container has-background-dark has-text-white-ter">
          <div className="columns is-mobile">
            <div className="column is-10 is-offset-1">
              {/* hidden in mobile */}
              <div className="columns">
                {/* 使用指南 */}
                <div className="column is-4">
                  <section className="menu">
                    <ul className="menu-list">
                      <li>
                        <p className="menu-label-f">
                          <FormattedMessage id="footer.guidance" />
                        </p>
                      </li>
                      {intro.map(o => (
                        <li key={o.index}>
                          <a className="h-navbar-item">{o.name}</a>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
                {/* 联系我们 */}
                <div className="column is-5">
                  <section>
                    <ul className="menu-list">
                      <li>
                        <p className="menu-label-f">
                          <FormattedMessage id="footer.contactus" />
                        </p>
                      </li>
                      {contantUsObj.map(o => (
                        <li key={o.index}>
                          <a className="h-navbar-item">
                            <div>
                              <span className="image is-24x24">
                                <img src={o.src} alt={o.alt} />
                              </span>
                              &ensp;
                              <span>{o.content}</span>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
                <div className="column is-3 has-text-right">
                  <div className="has-text-centered">
                    <div
                      className="image is-128x128"
                      style={{ margin: "auto" }}
                    >
                      <img src={qr} alt="heatex-qrcode" />
                    </div>
                    <p style={{ padding: "10px 0" }}>
                      <FormattedMessage id="footer.codetitle" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterBottom intl={intl} />
    </footer>
  );
};

export default injectIntl(Footer);
