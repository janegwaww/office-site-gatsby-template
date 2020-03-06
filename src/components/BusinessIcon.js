import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

function BusinessIcon({ iconItems = [] }) {
  return (
    <div className="business-card content">
      <div
        className={`columns is-multiline is-variable is-1-mobile is-2-tablet is-mobile`}
      >
        {iconItems.map((o, i) => (
          <div
            key={i}
            className={`column is-one-fifth-mobile is-one-sixth-tablet`}
          >
            <div className="icon-image">
              <PreviewCompatibleImage imageInfo={{ ...o }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

BusinessIcon.propTypes = {
  iconItems: PropTypes.array
};

export default BusinessIcon;
