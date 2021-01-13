import React from "react";
import {
  injectIntl,
  changeLocale,
  IntlContextConsumer
} from "gatsby-plugin-intl";

const LanguageSwitch = ({ intl }) => {
  return (
    <div className="language">
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) => (
          <>
            <span className="icon">
              <i className="h-icon haetek-globe" />
            </span>
            <a
              className={`${currentLocale === "zh" ? "is-active" : ""}`}
              name="zh"
              onClick={() => "zh"}
            >
              中
            </a>
            <span
              style={{
                width: "1px",
                borderLeft: "2px solid rgba(193,193,193,1)",
                height: "21px",
                margin: "0 6px 0 6px"
              }}
            ></span>
            <a
              className={`${currentLocale === "en" ? "is-active" : ""}`}
              name="en"
              onClick={() => "en"}
            >
              EN
            </a>
          </>
        )}
      </IntlContextConsumer>
    </div>
  );
};

export default injectIntl(LanguageSwitch);
