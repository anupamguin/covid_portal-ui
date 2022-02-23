import React, { Component } from "react";
import "./css/Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    const loginData = {
      username: this.state.username,
      password: this.state.password,
    };
    this.setState({ username: "", password: "" });
    console.log(loginData);
  };

  render() {
    return (
      <div className="allbody">
        <div className="containers">
          <div className="brand-logo"></div>
          <div className="brand-title">COVID PORTAL</div>
          <div className="inputs">
            <label className="onlyLabel one">EMAIL</label>
            <input
              type="text"
              placeholder="Min 6 charaters long"
              className="onlyInput one"
              name="username"
              onChange={this.onChange}
              value={this.state.username}
            />
            <label className="onlyLabel one">PASSWORD</label>
            <input
              type="password"
              placeholder="Min 6 charaters long"
              className="one onlyInput"
              name="password"
              onChange={this.onChange}
              value={this.state.password}
            />
            {/* <button type="submit" className="one onlyButton">
              LOGIN
            </button> */}
            <div className="mt-3 button_great content">
              <a
                id="videolink"
                className="a btn-get-started"
                onClick={this.onSubmit}
              >
                Login
              </a>
            </div>
          </div>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/anupam-guin-948b4718b/?originalSubdomain=in"
            className="myName"
          >
            MADE BY ANUPAM
          </a>
        </div>
      </div>
    );
  }
}
export default Login;
