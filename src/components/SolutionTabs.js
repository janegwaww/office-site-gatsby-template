import React, { useState } from "react";
import PropTypes from "prop-types";
import ContainCard from "../components/ContainCard";
import "./solution-tabs.sass";

function SolutionTabs({ solutionItems }) {
  let [items, setItems] = useState(
    solutionItems.blurbs.map((o, i) =>
      i === 0 ? { ...o, className: "is-active" } : o
    )
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
    <div className="solution-tabs">
      <h3 className="has-text-weight-bold is-size-3 has-text-white has-text-centered">
        {solutionItems.heading}
      </h3>
      <br />
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="tabs is-centered is-fullwidth">
            <ul>
              {[...items].map((o, i) => (
                <li key={i} data-tab={i} className={o.className}>
                  <a onClick={() => _tabSelect(o.heading)}>{o.heading}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <br />
      <div className="container">
        <div id="solu-tab-content">
          {[...items].map((o, i) => (
            <div data-content={i} key={i} className={o.className}>
              <ContainCard info={{ ...o, button: "查看详情" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

SolutionTabs.propTypes = {
  solutionItems: PropTypes.shape({
    blurbs: PropTypes.array,
    heading: PropTypes.string
  })
};

export default SolutionTabs;
