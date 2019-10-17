import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

function BusinessIcon({ iconItems = [] }) {
  const [isMobile, setIsMobile] = useState(false);
  const [icons, setIcons] = useState(iconItems);
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIcons(icons.slice(0, 10));
      setIsMobile(true);
    }
  }, []);
  return (
    <div className="business-card content">
      <div
        className={`columns is-multiline is-variable ${
          isMobile ? "is-1" : "is-2"
        } is-mobile`}
      >
        {icons.length === 0
          ? null
          : icons.map((o, i) => (
              <div
                key={i}
                className={`column ${isMobile ? "is-one-fifth" : "is-2"}`}
              >
                <PreviewCompatibleImage
                  imageInfo={{
                    ...o,
                    style: {
                      boxShadow: "0px 4px 10px 0px rgba(0,0,0,0.1)",
                      borderRadius: isMobile ? "2px" : "4px"
                    }
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
