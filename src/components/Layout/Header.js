import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../Api/UserApi";
import { setCurrentUser, resetReducer } from "../Actions/UserActions";

class Header extends Component {
  logout = () => {
    logout(this.props);
    window.location.href = "/";
  };
  render() {
    const { validToken, user } = this.props.setCurrentUserReducer;
    const userIsAuthenticated = (
      <>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/covid-map">Map Data</Link>
        </li>
        <li>
          <a href="#" className="desktop-item">
            News Portal &#9759;
          </a>
          <input type="checkbox" id="showDrop" />
          <label htmlFor="showDrop" className="mobile-item">
            News Portal &#9759;
          </label>
          <ul className="drop-menu">
            <li>
              <Link to="/covid-data">Corona Details</Link>
            </li>
            <li>
              <Link to="/covid-world-case">Worldwide Case</Link>
            </li>
            <li>
              <Link to="/graph">Graph Data</Link>
            </li>
          </ul>
        </li>
        {/* <li>
          <a href="#" className="desktop-item">
            Prevention &#9759;
          </a>
          <input type="checkbox" id="showMega" />
          <label htmlFor="showMega" className="mobile-item">
            Prevention &#9759;
          </label>
          <div className="mega-box">
            <div className="content">
              <div className="row"></div>
              <div className="row">
                <header>Design Services</header>
                <ul className="mega-links">
                  <li>
                    <a href="#">Graphics</a>
                  </li>
                  <li>
                    <a href="#">Vectors</a>
                  </li>
                  <li>
                    <a href="#">Business cards</a>
                  </li>
                  <li>
                    <a href="#">Custom logo</a>
                  </li>
                </ul>
              </div>
              <div className="row">
                <header>Email Services</header>
                <ul className="mega-links">
                  <li>
                    <a href="#">Personal Email</a>
                  </li>
                  <li>
                    <a href="#">Business Email</a>
                  </li>
                  <li>
                    <a href="#">Mobile Email</a>
                  </li>
                  <li>
                    <a href="#">Web Marketing</a>
                  </li>
                </ul>
              </div>
              <div className="row">
                <header>Security services</header>
                <ul className="mega-links">
                  <li>
                    <a href="#">Site Seal</a>
                  </li>
                  <li>
                    <a href="#">VPS Hosting</a>
                  </li>
                  <li>
                    <a href="#">Privacy Seal</a>
                  </li>
                  <li>
                    <a href="#">Website design</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li> */}
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li className="userhide">
          <a href="#" className="desktop-item">
            {user.name} &#9759;
          </a>
          <input type="checkbox" id="showDrop1" />
          <label htmlFor="showDrop1" className="mobile-item">
            {user.name} &#9759;
          </label>
          <ul className="drop-menu">
            <li>
              {/* <Link to="/login">Login</Link> */}
              <a onClick={this.logout}>Logout</a>
            </li>
          </ul>
        </li>
      </>
    );
    const userIsNotAuthenticated = (
      <>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="userhide">
          <a href="#" className="desktop-item">
            User &#9759;
          </a>
          <input type="checkbox" id="showDrop1" />
          <label htmlFor="showDrop1" className="mobile-item">
            User &#9759;
          </label>
          <ul className="drop-menu">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Sign Up</Link>
            </li>
          </ul>
        </li>
      </>
    );

    let headerLinks;
    if (validToken && user) {
      headerLinks = userIsAuthenticated;
    } else {
      headerLinks = userIsNotAuthenticated;
    }

    return (
      <div>
        <nav>
          <div className="wrapper">
            <div className="logo">
              <Link to="/">COVID PORTAL</Link>
            </div>
            <input type="radio" name="slider" id="menu-btn" />
            <input type="radio" name="slider" id="close-btn" />
            <ul className="nav-links">
              <label htmlFor="close-btn" className="btn close-btn">
                &#10005;
              </label>
              {headerLinks}
            </ul>
            <label htmlFor="menu-btn" className="btn menu-btn">
              &#9781;
            </label>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  setCurrentUserReducer: state.userReducer.setCurrentUserReducer,
});
const mapDispatchToProps = {
  setCurrentUser,
  resetReducer,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
