import React, { useState } from "react";
import PropTypes from "prop-types";
import ContainCard from "../components/ContainCard";

function SeekerTabs({ scrollItems = [], language }) {
  const [items, setItems] = useState(
    scrollItems.map((o, i) => (i === 0 ? { ...o, className: "is-active" } : o))
  );
  const [contentItem, setContentItem] = useState(items[0]);
  const _tabSelect = tab => {
    setItems(
      items.map(o => {
        if (o.heading === tab) {
          return { ...o, className: "is-active" };
        } else {
          return { ...o, className: "" };
        }
      })
    );
    setContentItem(items.filter(o => o.heading === tab)[0]);
  };
  return (
    <div className="seeker-tabs">
      <div className="tabs is-around" id="tabs">
        <ul>
          {[...items].map((o, i) => (
            <li key={i} className={`has-text-centered ${o.className}`}>
              <div>
                {language === "zh" && (
                  <div className="is-size-7 has-text-grey-light is-hidden-mobile">
                    {o.heading}
                  </div>
                )}
                <a
                  className="is-size-7-mobile"
                  onClick={() => _tabSelect(o.heading)}
                >
                  {o.subHeading}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="section h-section card-section">
        <ContainCard info={contentItem} />
      </div>
    </div>
  );
}

SeekerTabs.propTypes = {
  scrollItems: PropTypes.array
};

export default SeekerTabs;
