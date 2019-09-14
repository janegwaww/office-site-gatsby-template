import React from "react";
import PropTypes from "prop-types";
import ContainCard from "../components/ContainCard";

function SeekerTabs({ scrollItems = [] }) {
  return (
    <div>
      <div className="tabs is-centered is-fullwidth">
        <ul>
          {scrollItems.map((o, i) => (
            <li key={i} className="has-text-centered">
              <div className="is-size-7 has-text-grey-light">{o.heading}</div>
              <a href="#top">{o.subHeading}</a>
            </li>
          ))}
        </ul>
      </div>
      <br />
      <br />
      <div className="container">
        <ContainCard cardInfo={[]} />
      </div>
    </div>
  );
}

SeekerTabs.propTypes = {
  scrollItems: PropTypes.array
};

export default SeekerTabs;
