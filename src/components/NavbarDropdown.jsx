import React, { useState } from "react";
import { Link, FormattedMessage } from "gatsby-plugin-intl";

export default function NavbarDropdown({
  menu = {},
  active = "",
  subNav = ""
}) {
  const { message, child } = menu;
  const [flat, setFlat] = useState(false);

  const openMenu = () => {
    setFlat((prev) => !prev);
  };

  return (
    <div className="navbar-item has-dropdown is-hoverable">
      <a
        className={`navbar-item is-tab ${active} ${flat ? "flat" : ""}`}
        onClick={openMenu}
      >
        <FormattedMessage id={message} />
      </a>
      <div className="navbar-dropdown">
        {child.map((o) => {
          let sub = o.index === subNav ? "is-active" : "";
          return (
            <Link className={`navbar-item ${sub}`} key={o.index} to={o.address}>
              <div className="navbar-icon">
                <img src={o.icon} alt={o.index} />
              </div>
              <FormattedMessage id={o.message} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
