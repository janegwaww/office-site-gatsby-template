import React from "react";
import PropTypes from "prop-types";
import ContainCard from "../components/ContainCard";

function SolutionTabs({ solutionItems }) {
  const items = solutionItems.blurbs;
  return (
    <div>
      <h3 className="has-text-weight-bold is-size-3 has-text-white has-text-centered">
        {solutionItems.heading}
      </h3>
      <br />
      <div className="tabs is-centered is-fullwidth">
        <ul>
          {items.map((o, i) => (
            <li key={i}>
              <a href="#top" className="has-text-white">
                {o.heading}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <br />
      <div className="container">
        <ContainCard info={{}} />
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
