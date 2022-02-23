import React, { Component } from "react";
import "./css/animate.css";
import "./css/Register.css";
import { Animated } from "react-animated-css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mobile: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
    };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  Click = () => {
    console.log(
      this.state.name +
        "  " +
        this.state.mobile +
        "  " +
        this.state.email +
        "  " +
        this.state.age
    );
  };
  render() {
    return (
      <div className="allbodys">
        <footer className="conFoot">
          <div className="container">
            <Animated
              animationIn="wobble"
              animationOut="fadeOut"
              isVisible={true}
            >
              <h2>COVID Portal Registration</h2>
            </Animated>
            <div className="row100">
              <AnimatedInput
                animationIn="bounceInLeft"
                animationOut="fadeOut"
                type="text"
                name="name"
                label="Name"
                onChange={this.onChange}
              />
              <AnimatedInput
                animationIn="bounceInRight"
                animationOut="fadeOut"
                type="mobile"
                name="mobile"
                label="Mobile"
                onChange={this.onChange}
              />
            </div>

            <div className="row100">
              <AnimatedInput
                animationIn="bounceInLeft"
                animationOut="fadeOut"
                type="text"
                name="email"
                label="Email"
                onChange={this.onChange}
              />

              <AnimatedInput
                animationIn="bounceInRight"
                animationOut="fadeOut"
                type="text"
                name="age"
                label="Age"
                onChange={this.onChange}
              />
            </div>
            <div className="row100">
              <AnimatedInput
                animationIn="bounceInLeft"
                animationOut="fadeOut"
                type="password"
                name="password"
                label="Password"
                onChange={this.onChange}
              />

              <AnimatedInput
                animationIn="bounceInRight"
                animationOut="fadeOut"
                type="text"
                name="confirmPassword"
                label="Confirm Password"
                onChange={this.onChange}
              />
            </div>

            <div className="row100">
              <div className="row100">
                <div
                  className="col"
                  style={{ textAlign: "center", marginTop: "2.1rem" }}
                >
                  <input type="submit" value="Send" onClick={this.Click} />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Register;

export const AnimatedInput = (props) => {
  return (
    <Animated
      animationIn={props.animationIn}
      animationOut={props.animationOut}
      isVisible={true}
    >
      <div className="col">
        <div className="inputBox">
          <input
            type={props.type}
            name={props.name}
            onChange={props.onChange}
            required
          />
          <span className="text">{props.label}</span>
          <span className="line"></span>
        </div>
      </div>
    </Animated>
  );
};
