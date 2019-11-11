import React, {useState} from "react";

const spanStyle = {
  width: "1px",
  borderLeft: "2px solid rgba(193,193,193,1)",
  height: "21px",
  margin: "0 6px 0 6px",
};

const LanguageSwitch = () => {
  const [activeItem, setActiveItem] = useState({zh: "is-active"});
  const handleSwitch = e => {
    e.preventDefault();
    setActiveItem({[e.target.name]: "is-active"});
  };
  return (
    <div className="language">
      <a className={activeItem.zh} name="zh" onClick={handleSwitch}>
        中
      </a>
      <span style={spanStyle}></span>
      <a className={activeItem.en} name="en" onClick={handleSwitch}>
        EN
      </a>
    </div>
  );
};

export default LanguageSwitch;
