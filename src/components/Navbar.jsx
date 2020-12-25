import React from "react";
import { globalHistory } from "@reach/router";
import { Link, FormattedMessage } from "gatsby-plugin-intl";
import LanguageSwitch from "../components/LanguageSwitch";
import logo from "../img/logo.png";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
      activeNav: {},
      menuItems: [
        {
          index: "home",
          address: "/",
          message: "navbar.home"
        },
        {
          index: "kengine",
          address: "http://kengine.haetek.com",
          message: "navbar.kengine"
        },
        {
          index: "coretech",
          address: "#",
          message: "navbar.coretech"
        },
        {
          index: "college",
          address: "/college/",
          message: "navbar.college"
        },
        {
          index: "aboutus",
          address: "/aboutus/",
          message: "navbar.aboutus"
        },
        {
          index: "join",
          address: "/join/",
          message: "navbar.joinus"
        }
      ]
    };
  }

  componentDidMount() {
    this._activeNavHandle(
      globalHistory.location.pathname.replace(/\/$/, "").split("/").pop()
    );
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
    const languages = ["en", "zh"];
    const path = !nav || languages.includes(nav) ? "home" : nav;
    this.setState({
      activeNav: {
        [path]: "is-active"
      }
    });
  };

  render() {
    const { activeNav, menuItems } = this.state;

    return (
      <nav
        className="navbar is-fixed-top is-transparent"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item logo" title="Logo">
              <figure className="image is-143x40 is-100x28-mobile">
                <img src={logo} alt="Haetek" />
              </figure>
            </Link>
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>

          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              {menuItems.map((o) => {
                if (o.index === "kengine") {
                  return (
                    <a
                      href={`${o.address}`}
                      className="navbar-item is-tab"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FormattedMessage id={`${o.message}`} />
                    </a>
                  );
                }
                if (o.index === "coretech") {
                  return (
                    <div className="navbar-item has-dropdown is-hoverable">
                      <a className="navbar-link is-arrowless">
                        <FormattedMessage id={o.message} />
                      </a>
                      <div className="navbar-dropdown">
                        <a class="navbar-item">Overview</a>
                        <a class="navbar-item">Elements</a>
                      </div>
                    </div>
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
            <div className="navbar-end has-text-centered">
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
