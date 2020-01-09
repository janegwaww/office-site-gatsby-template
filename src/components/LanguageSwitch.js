import React, { useState } from "react";
import { injectIntl, changeLocale } from "gatsby-plugin-intl";

const spanStyle = {
  width: "1px",
  borderLeft: "2px solid rgba(193,193,193,1)",
  height: "21px",
  margin: "0 6px 0 6px"
};

const LanguageSwitch = ({ intl }) => {
  const [activeItem] = useState({ [intl.locale]: "is-active" });
  const handleSwitch = e => {
    e.preventDefault();
    changeLocale(e.target.name);
  };
  return (
    <div className="language">
      <a className={activeItem.zh} name="zh" onClick={handleSwitch}>
        中
      </a>
      <span style={spanStyle}></span>
      <a className={activeItem.en} name="en" onClick={handleSwitch}>
        EN
      </a>
    </div>
  );
};

export default injectIntl(LanguageSwitch);
