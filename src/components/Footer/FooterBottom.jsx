import React, { useState, useEffect } from "react";
import { FormattedMessage } from "gatsby-plugin-intl";

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

export default FooterBottom;
