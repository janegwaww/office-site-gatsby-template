import React, {useState} from "react";
import PropTypes from "prop-types";
import angleDown from "../img/arrow-down.svg";

const Dropdown = ({list}) => {
  const [toggle, setToggle] = useState("");
  const [address, setAddress] = useState("搜索地点");
  const handleChange = e => {
    e.preventDefault();
    // setSearch({...search, [e.target.name]: e.target.value});
  };
  const handleToggle = () => {
    toggle === "is-active" ? setToggle("") : setToggle("is-active");
  };
  const handleSelect = e => {
    setAddress(e);
    handleToggle();
  };

  return (
    <div className={`dropdown is-fullwidth ${toggle}`}>
      <div className="dropdown-trigger">
        <button
          className="button is-fullwidth"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={handleToggle}
        >
          <span>{address}</span>
          <span className="icon is-small is-right">
            <img src={angleDown} width="20" height="20" />
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          <a
            className="dropdown-item is-active"
            onClick={() => handleSelect("搜索地点")}
          >
            搜索地点
          </a>
          <a className="dropdown-item" onClick={() => handleSelect("深圳")}>
            深圳
          </a>
          <a className="dropdown-item" onClick={() => handleSelect("北京")}>
            北京
          </a>
          <a className="dropdown-item" onClick={() => handleSelect("上海")}>
            上海
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
