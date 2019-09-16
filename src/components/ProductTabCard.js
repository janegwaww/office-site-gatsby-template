import React, { useState } from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

function ProductTabCard({ cardInfo = [] }) {
  const [items, setItems] = useState(cardInfo);
  const [item, setItem] = useState(items[0]);
  const tabSelect = tab => {
    console.log(`product card click`);
    // setItems();
    // setItem(items.filter(o => o.heading === tab)[0]);
  };
  return (
    <div
      className="has-background-white"
      style={{ boxShadow: "0px 2px 10px 2px rgba(0,0,0,0.15)" }}
    >
      <div className="tabs has-text-weight-bold" style={{ marginBottom: 0 }}>
        <ul>
          {items.map((o, i) => (
            <li key={i} className={o.className}>
              <a onClick={() => tabSelect(o.heading)}>{o.heading}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="columns">
        <div className="column is-three-quarters">
          <div className="content " style={{ padding: "1.5rem 1.5rem" }}>
            <PreviewCompatibleImage imageInfo={item} />
          </div>
        </div>
        <div className="is-divider-vertical" style={{ padding: 0 }}></div>
        <div className="column is-one-quarters">
          <div className="content" style={{ padding: "1.5rem 1.5rem" }}>
            {Array.isArray(item.description) ? (
              item.description.map((o, i) => (
                <div key={i} style={{ marginBottom: "1em" }}>
                  <p className="is-size-6 has-text-weight-bold">{o.heading}</p>
                  <p className="is-size-7">{o.description}</p>
                </div>
              ))
            ) : (
              <div>
                {" "}
                <p className="is-size-6 has-text-weight-bold">
                  {item.description.heading}
                </p>
                <p className="is-size-7">{item.description.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

ProductTabCard.propTypes = {
  cardInfo: PropTypes.array
};

export default ProductTabCard;
