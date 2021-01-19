import React, { useState } from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import SectionTitle from "./SectionTitle";

function BusinessIcon({ iconItems = [] }) {
  const [select, setSelect] = useState(["is-active", ""]);

  const handleClick = () => {
    setSelect(([left, right]) => [right, left]);
  };

  return (
    <div className="business-icon">
      <SectionTitle title="合作伙伴" subtitle="COOPERATIVE PARTNER" />
      <div className="has-margin-bottom-60 has-margin-bottom-30-mobile" />
      <div className="tabs is-centered">
        <ul>
          <li className={`${select[0]}`} onClick={handleClick}>
            <a>商务合作</a>
          </li>
          <li className={`${select[1]}`} onClick={handleClick}>
            <a>学术支持</a>
          </li>
        </ul>
      </div>
      <div className="tab-content">
        <div className={`tab-item ${select[0]}`}>
          <div className="columns is-multiline is-variable is-1-mobile is-2-tablet is-mobile">
            {iconItems.map(
              (o, i) =>
                o.type === "business" && (
                  <div
                    key={i}
                    className={`column is-one-sixth-tablet is-one-third-mobile`}
                  >
                    <div className="icon-image">
                      <PreviewCompatibleImage imageInfo={{ ...o }} />
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
        <div className={`tab-item ${select[1]}`}>
          <div className="columns is-multiline is-variable is-1-mobile is-2-tablet is-mobile">
            {iconItems.map(
              (o, i) =>
                o.type === "academic" && (
                  <div
                    key={i}
                    className={`column is-one-sixth-tablet is-one-third-mobile`}
                  >
                    <div className="icon-image">
                      <PreviewCompatibleImage imageInfo={{ ...o }} />
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

BusinessIcon.propTypes = {
  iconItems: PropTypes.array
};

export default BusinessIcon;
