import React, { useState } from "react";
import PropTypes from "prop-types";
import { useIntl } from "gatsby-plugin-intl";
import Dropdown from "../components/Dropdown";
import searchImg from "../img/search.png";

const JoinInput = ({ filter, selectOptions }) => {
  const { formatMessage } = useIntl();
  const [search, setSearch] = useState({});
  const handleChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.value });
    filter({ ...search, [e.target.name]: e.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    filter(search);
  };

  return (
    <form name="search" onSubmit={handleSubmit} className="join-input-form">
      <div className="columns is-mobile is-variable is-5 is-multiline">
        <div className="column is-one-third-tablet is-half-mobile">
          <div className="box">
            <div className="control is-expanded has-icons-right">
              <Dropdown
                onChange={handleChange}
                options={selectOptions.address}
              />
            </div>
          </div>
        </div>
        <div className="column is-one-third-tablet is-half-mobile">
          <div className="control is-expanded has-icons-right">
            <div className="box">
              <Dropdown
                onChange={handleChange}
                options={selectOptions.position}
              />
            </div>
          </div>
        </div>
        <div className="search-input column is-one-third-tablet is-full-mobile">
          <div className="box">
            <div className="control is-expanded has-icons-right">
              <input
                name="job"
                className="input h-input is-size-7-mobile"
                type="text"
                placeholder={formatMessage({ id: "join.searchjob" })}
                onChange={handleChange}
              />
              <span className="icon is-small is-right" onClick={handleSubmit}>
                <i className="image is-20x20 is-13x13-mobile">
                  <img
                    alt="search-icon"
                    src={searchImg}
                    width="20"
                    height="20"
                  />
                </i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

JoinInput.propTypes = {
  filter: PropTypes.func,
  selectOptions: PropTypes.object
};

export default JoinInput;
