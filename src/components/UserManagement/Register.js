import React, { Component } from "react";
import "./css/animate.css";
import "./css/Register.css";
import { Animated } from "react-animated-css";
import { do_register, errorReducer } from "../Actions/UserActions";
import { connect } from "react-redux";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      mobile: "",
      age: 0,
      password: "",
      confirmPassword: "",
      suspensePage: "hide-spin",
    };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  Click = () => {
    const regData = {
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.mobile,
      age: this.state.age,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    };
    this.setState({ suspensePage: "show-spin" });
    this.props.do_register(regData, this.props);
    this.setState({
      name: "",
      email: "",
      mobile: {},
      age: {},
      password: "",
      confirmPassword: "",
    });
  };

  componentWillReceiveProps(nextProps) {
    console.log("prpps", nextProps);
    this.setState({ suspensePage: "hide-spin" });
    this.props.registerResponse && this.props.history.push("/otp");
  }

  render() {
    return (
      <section>
        <div className={this.state.suspensePage}></div>
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
                  type="number"
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
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  registerResponse: state.userReducer.registerResponse
    ? state.userReducer.registerResponse
    : {},
});

const mapDispatchToProps = {
  do_register,
  errorReducer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

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
