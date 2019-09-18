import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import bulmaCarousel from "../../node_modules/bulma-extensions/bulma-carousel/dist/js/bulma-carousel.min.js";
import ContainCard from "../components/ContainCard";
import "./solution-tabs.sass";

function SolutionTabs({ solutionItems }) {
  const [items, setItems] = useState(
    solutionItems.blurbs.map((o, i) =>
      i === 0 ? { ...o, className: "is-active" } : o
    )
  );
  const _tabSelect = key => {
    setItems(
      items.map((o, i) =>
        i === key ? { ...o, className: "is-active" } : { ...o, className: "" }
      )
    );
  };
  useEffect(() => {
    const carousels = bulmaCarousel.attach(`#carousel-solution`, {
      initialSlide: 0,
      slidesToScroll: 1,
      slidesToShow: 1,
      effect: "translate",
      pagination: false
    });
  });

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
                <li key={i} className={o.className}>
                  <a onClick={() => _tabSelect(i)}>{o.heading}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div id="carousel-solution" className="carousel">
          {[...items].map((o, i) => (
            <div key={i} className={`item-${i}`} style={{ padding: "0 2rem" }}>
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
