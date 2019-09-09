import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.png";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
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

  render() {
    return (
      <nav
        className="navbar is-transparent is-fixed-top has-shadow"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Haetek" style={{ width: "88px" }} />
            </Link>
            {/* Hamburger menu */}
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
              <Link className="navbar-item" to="/">
                首页
              </Link>
              <Link className="navbar-item" to="/product-center">
                产品中心
              </Link>
              {/* <Link className="navbar-item" to="/"> */}
              {/*   解决方案 */}
              {/* </Link> */}
              {/* <Link className="navbar-item" to="/"> */}
              {/*   核心案例 */}
              {/* </Link> */}

              <Link className="navbar-item" to="/about-us">
                关于黑顿
              </Link>
              <Link className="navbar-item" to="/college">
                黑顿研究院
              </Link>
              <Link className="navbar-item" to="/join">
                加入我们
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                登录
              </a>
              <a
                className="navbar-item"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                注册
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
