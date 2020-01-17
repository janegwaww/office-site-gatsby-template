import React, { useState } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "gatsby-plugin-intl";
import Switch from "react-switch";

const RelatedItem = ({ info = {} }) => {
  return (
    <div className="related-item">
      <div style={{ marginRight: "10px" }}>
        <div className="index-num">{info.key + 1}</div>
      </div>
      <div>
        <div className="is-size-6 has-text-666">
          <span style={{ marginRight: "30px" }}>
            <FormattedMessage id="bluesearch.correlation" />:{" "}
            <span className="relate-num">{info.match_score}</span>
          </span>
          <span>
            <FormattedMessage id="bluesearch.location" />:{" "}
            <span className="relate-num">{`[${info.str_position.toString()}]`}</span>
          </span>
        </div>
        <br />
        <span
          className="is-size-6-5 has-text-333"
          dangerouslySetInnerHTML={{
            __html: `...${info.matched_str.replace(
              info.matched_str,
              `<span style='color:#2c95ff'>${info.matched_str}</span>`
            )}...`
          }}
        ></span>
      </div>
    </div>
  );
};
RelatedItem.propTypes = {
  info: PropTypes.object
};

const SearchResult = ({ result = [], checkHandler }) => {
  const [check, setCheck] = useState(false);
  const handleChange = () => {
    setCheck(!check);
    checkHandler(!check);
  };
  return (
    <div className="search-result">
      <div className="field">
        <div className="field">
          <label htmlFor="l-switch">
            <span className="is-size-6 has-text-666">
              <FormattedMessage id="bluesearch.turnonunderstand" />
              :&ensp;
            </span>
            <Switch
              onChange={handleChange}
              checked={check}
              offColor={"#999"}
              onColor={"#0c66ff"}
              handleDiameter={12}
              uncheckedIcon={false}
              checkedIcon={false}
              height={20}
              width={36}
              id="l-switch"
            />
          </label>
        </div>
        <div className="is-size-7 has-text-999">
          <FormattedMessage id="bluesearch.resultnote" />
        </div>
      </div>
      <br />
      <div className="relate-section">
        {result.map((o, i) => (
          <RelatedItem info={{ ...o, key: i }} key={i} />
        ))}
      </div>
    </div>
  );
};
SearchResult.propTypes = {
  result: PropTypes.array,
  checkHandler: PropTypes.func
};

export default SearchResult;
