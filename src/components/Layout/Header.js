import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="wrapper">
            <div className="logo">
              <Link to="/">Anupam Guin</Link>
            </div>
            <input type="radio" name="slider" id="menu-btn" />
            <input type="radio" name="slider" id="close-btn" />
            <ul className="nav-links">
              <label htmlFor="close-btn" className="btn close-btn">
                &#10005;
              </label>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/otp">Other Centre</Link>
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
                    <a href="#">Corona Details</a>
                  </li>
                  <li>
                    <a href="#">Worldwide Case</a>
                  </li>
                  <li>
                    <a href="#">Diseases control</a>
                  </li>
                  <li>
                    <a href="#">Drop menu 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="desktop-item">
                  Prevention &#9759;
                </a>
                <input type="checkbox" id="showMega" />
                <label htmlFor="showMega" className="mobile-item">
                  Prevention &#9759;
                </label>
                <div className="mega-box">
                  <div className="content">
                    <div className="row">
                      {/* <img src="img.jpg" alt=""> */}
                    </div>
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
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              {/* <li>
                <a href="#">User</a>
              </li> */}

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
export default Header;