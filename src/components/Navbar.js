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
      activeNav: {}
    };
  }

  componentDidMount() {
    this._activeNavHandle(
      globalHistory.location.pathname
        .replace(/\/$/, "")
        .split("/")
        .pop()
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

  _activeNavHandle = nav => {
    const path = !nav || ["en", "zh"].includes(nav) ? "home" : nav;
    this.setState({
      activeNav: {
        [path]: "is-active"
      }
    });
  };

  render() {
    const { activeNav } = this.state;

    return (
      <nav
        className="navbar is-fixed-top has-shadow is-transparent"
        role="navigation"
        aria-label="main navigation"
        style={{ boxShadow: "0px 2px 10px 0px rgba(0,0,0,0.1)" }}
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
            <div className="navbar-start has-text-centered">
              <Link
                className="navbar-item is-tab"
                to="/"
                activeClassName={activeNav.home}
              >
                <FormattedMessage id="navbar.home" />
              </Link>
              <Link
                className="navbar-item is-tab"
                to="/productcenter/"
                activeClassName={activeNav.productcenter}
              >
                <FormattedMessage id="navbar.productcenter" />
              </Link>
              <Link
                className="navbar-item is-tab"
                to="/bluesearch/"
                activeClassName={activeNav.bluesearch}
              >
                <FormattedMessage id="navbar.bluesearch" />
              </Link>

              <Link
                className="navbar-item is-tab"
                to="/case/"
                activeClassName={activeNav.case}
              >
                <FormattedMessage id="navbar.case" />
              </Link>
              <Link
                className="navbar-item is-tab"
                to="/aboutus/"
                activeClassName={activeNav.aboutus}
              >
                <FormattedMessage id="navbar.aboutus" />
              </Link>
              <Link
                className="navbar-item is-tab"
                to="/college/"
                activeClassName={activeNav.college}
              >
                <FormattedMessage id="navbar.college" />
              </Link>
              <Link
                className="navbar-item is-tab"
                to="/join/"
                activeClassName={activeNav.join}
              >
                <FormattedMessage id="navbar.joinus" />
              </Link>
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
