import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

function BusinessIcon({ iconItems = [] }) {
  return (
    <div>
      <div className="columns is-multiline is-variable is-2 is-mobile">
        {iconItems.length === 0
          ? null
          : iconItems.map((o, i) => (
              <div key={i} className="column is-2">
                <PreviewCompatibleImage
                  imageInfo={{
                    ...o,
                    style: { boxShadow: "0px 4px 10px 0px rgba(0,0,0,0.1)" }
                  }}
                />
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
