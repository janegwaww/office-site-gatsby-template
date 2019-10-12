import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

function BusinessIcon({ iconItems = [] }) {
  const [icons, setIcons] = useState(iconItems);
  const [columnSize, setColumnSize] = useState("is-2");
  const [gap, setGap] = useState("is-2");
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIcons(icons.slice(0, 10));
      setColumnSize("is-one-fifth");
      setGap("is-1");
    }
  }, []);
  return (
    <div className="business-card content">
      <div className={`columns is-multiline is-variable ${gap} is-mobile`}>
        {icons.length === 0
          ? null
          : icons.map((o, i) => (
              <div key={i} className={`column ${columnSize}`}>
                <PreviewCompatibleImage
                  imageInfo={{
                    ...o,
                    style: {
                      boxShadow: "0px 4px 10px 0px rgba(0,0,0,0.1)",
                      borderRadius: "2px"
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
