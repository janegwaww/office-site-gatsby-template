import React from "react";

const RatePanel = ({ rateItems = [] }) => {
  const Item = ({ info = {} }) => (
    <div className="rate-panel-item has-text-centered">
      <p className="is-size-3 has-text-white is-size-5-5-mobile">
        {info.description}
      </p>
      <div
        style={{
          width: "2rem",
          borderTop: "solid .2rem white",
          margin: "2px auto 0.8rem"
        }}
      />
      <p className="heading has-text-white is-size-6 is-size-7-mobile">
        {info.heading}
      </p>
    </div>
  );
  return (
    <div
      className="rate-panel level is-mobile is-paddingless-tablet"
      style={{ padding: "0rem 1rem" }}
    >
      <div className="level-left">
        <Item info={rateItems[0]} />
      </div>
      <div className="level-item">
        <Item info={rateItems[1]} />
      </div>
      <div className="level-right">
        <Item info={rateItems[2]} />
      </div>
    </div>
  );
};

export default RatePanel;
