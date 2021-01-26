import React from "react";
import { globalHistory } from "@reach/router";
import { Link, FormattedMessage } from "gatsby-plugin-intl";
import LanguageSwitch from "../LanguageSwitch";
import NavbarDropdown from "../NavbarDropdown";
import Menu from "./Navbar.json";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
      activeNav: {},
      menuItems: Menu,
      hover: "",
      subNav: ""
    };

    this.navbarTransparent = this.navbarTransparent.bind(this);
  }

  componentDidMount() {
    const nav = globalHistory.location.pathname
      .replace(/^\/|\/$|en\/|zh\//g, "")
      .split("/");
    this.setState({ subNav: nav[1] });
    this._activeNavHandle(nav.shift());
    window.addEventListener("scroll", this.navbarTransparent);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.navbarTransparent);
  }

  navbarTransparent() {
    if (window.pageYOffset > 20) {
      this.setState({ hover: "hover" });
    } else {
      this.setState({ hover: "" });
    }
  }

  toggleHamburger = () => {
    //   toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      //   after state has been updated,
      () => {
        //   set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  _activeNavHandle = (nav) => {
    const path = !nav ? "home" : nav;
    this.setState({
      activeNav: {
        [path]: "is-active"
      }
    });
  };

  render() {
    const {
      activeNav,
      menuItems,
      hover,
      subNav,
      navBarActiveClass
    } = this.state;

    return (
      <nav
        className={`navbar is-fixed-top is-transparent ${hover} ${navBarActiveClass}`}
        role="navigation"
        aria-label="main navigation"
      >
        <div
          className="navbar-menu-background"
          onClick={this.toggleHamburger}
        />
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item logo" title="Logo">
              <figure className="image is-143x40 is-100x28-mobile">
                <span className="h-icon haetek-logo" />
              </figure>
            </Link>
            <div
              className={`navbar-burger burger ${navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>

          <div id="navMenu" className={`navbar-menu ${navBarActiveClass}`}>
            <div className="navbar-end">
              {menuItems.map((o) => {
                if (o.index === "kengine") {
                  return (
                    <a
                      href={`${o.address}`}
                      className="navbar-item is-tab"
                      target="_blank"
                      rel="noopener noreferrer"
                      key={o.index}
                    >
                      <FormattedMessage id={`${o.message}`} />
                    </a>
                  );
                }
                if (o.index === "coretech") {
                  return (
                    <NavbarDropdown
                      menu={o}
                      active={activeNav[o.index]}
                      subNav={subNav}
                      key={o.index}
                    />
                  );
                }
                return (
                  <Link
                    className="navbar-item is-tab"
                    to={o.address}
                    activeClassName={activeNav[o.index]}
                    key={o.index}
                  >
                    <FormattedMessage id={`${o.message}`} />
                  </Link>
                );
              })}
            </div>
            {/* 暂时隐藏多语言选项 */}
            <div className="navbar-end is-hidden">
              <div className="navbar-item">
                <LanguageSwitch />
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
