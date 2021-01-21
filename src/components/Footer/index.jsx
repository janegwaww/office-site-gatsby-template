import React from "react";
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl";
import FooterBottom from "./FooterBottom";

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
      <div className="content footer-above has-text-centered ">
        <div className="container">
          <div className="columns is-mobile">
            <div className="column is-10 is-offset-1">
              {/* hidden in mobile */}
              <div className="columns is-mobile is-multiline">
                {/* 使用指南 */}
                <div className="column is-4-tablet is-full-mobile">
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
                  <div className="is-divider is-hidden-tablet" />
                </div>
                {/* 联系我们 */}
                <div className="column is-5-tablet is-full-mobile">
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
                <div className="column is-3-tablet has-text-right qr-code-column is-full-mobile">
                  <div className="has-text-centered qr-code-content">
                    <div className="h-icon haetek-logo has-margin-bottom-15" />
                    <div className="image is-144x144">
                      <img src="/img/icon/qrcode.png" alt="heatex-qrcode" />
                    </div>
                  </div>
                  <div className="is-divider is-hidden-tablet" />
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
