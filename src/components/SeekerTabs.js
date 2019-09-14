import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ContainCard from "../components/ContainCard";
import "./seeker-tabs.sass";

function SeekerTabs({ scrollItems = [] }) {
  let [items, setItems] = useState(
    scrollItems.map((o, i) => (i === 0 ? { ...o, className: "is-active" } : o))
  );
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
  };
  return (
    <div>
      <div className="tabs is-centered is-fullwidth" id="tabs">
        <ul>
          {[...items].map((o, i) => (
            <li
              key={i}
              className={`has-text-centered ${o.className}`}
              data-tab={o.heading}
            >
              <p className="is-size-7 has-text-grey-light">{o.heading}</p>
              <a onClick={() => _tabSelect(o.heading)}>{o.subHeading}</a>
            </li>
          ))}
        </ul>
      </div>
      <br />
      <br />
      <div className="container">
        <div id="tab-content">
          {[...items].map((o, i) => (
            <div data-content={o.heading} key={i} className={o.className}>
              <ContainCard info={{ ...o, button: `了解更多` }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

SeekerTabs.propTypes = {
  scrollItems: PropTypes.array
};

export default SeekerTabs;
