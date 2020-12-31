import React, { useState, useEffect } from "react";
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl";

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
    <div className="footer-bottom content has-background-grey-darker is-size-6 has-text-grey">
      <div className="container">
        <div className={`columns is-mobile ${center}`}>
          <div className={`column ${side}`}>
            <div className="level">
              <div className="level-left has-text-centered is-size-7-mobile">
                {intl.locale === "zh" ? (
                  <div className="gov-code">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span className="gov-icon image is-20x20 is-10x10-mobile">
                        <img src="/img/icon/gov.png" alt="gov" />
                      </span>
                      <a
                        className="bd-notification is-primary"
                        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030702002640"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        粤公网安备 44030702002640号
                      </a>
                    </div>
                    <div>
                      <a
                        className="bd-notification is-primary"
                        href="https://beian.miit.gov.cn/#/Integrated/index"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        粤ICP备19120979号
                      </a>
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
      src: "/img/icon/mobile-icon.svg",
      content: formatMessage({ id: "footer.mobile" })
    },
    {
      index: "wechat",
      src: "/img/icon/wechat-icon.svg",
      content: "haetek_20190801"
    },
    {
      index: "mail",
      src: "/img/icon/mail-icon.svg",
      content: "peizhengqi@kc-group.com.cn"
    },
    {
      index: "address",
      src: "/img/icon/address-icon.svg",
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
    <footer className="footer has-text-black has-background-white-ter">
      <FooterMobile />
      <div className="content footer-above has-text-centered is-hidden-mobile">
        <div className="container">
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
                      {intro.map((o) => (
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
                      {contantUsObj.map((o) => (
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
                    <span className="h-icon haetek-logo has-margin-bottom-15" />
                    <div
                      className="image is-144x144"
                      style={{ margin: "auto" }}
                    >
                      <img src="/img/icon/qrcode.png" alt="heatex-qrcode" />
                    </div>
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
