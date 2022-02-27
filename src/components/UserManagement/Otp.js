import React, { Component } from "react";
import { connect } from "react-redux";
import { otpSubmit } from "../Actions/UserActions";

class Otp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: "",
    };
  }

  onchng = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  SubmitBtn = (e) => {
    console.log(this.props.registerResponse);
    const otpSubmit = {
      id: this.props.registerResponse.id,
      otp: this.state.otp,
    };
    this.props.otpSubmit(otpSubmit, this.props);
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.otpSubmitResponse !== nextProps.otpSubmitResponse) {
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <div className="allbody">
        <div className="containers">
          <div className="brand-logo"></div>
          <div className="brand-title">COVID PORTAL OTP</div>
          <div className="inputs">
            <label className="onlyLabel one">One Time Password</label>
            <input
              type="number"
              placeholder="ENTER OTP"
              className="onlyInput one"
              name="otp"
              onChange={this.onchng}
              value={this.state.otp}
            />
          </div>
          <button className="button-73" role="button" onClick={this.SubmitBtn}>
            Submit
          </button>
          <br />
          <br />
          <p className="text-danger">Check your E-Mail</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  registerResponse: state.userReducer.registerResponse
    ? state.userReducer.registerResponse
    : {},
  otpSubmitResponse: state.userReducer.otpSubmitResponse
    ? state.userReducer.otpSubmitResponse
    : {},
});

const mapDispatchToProps = {
  otpSubmit,
};
export default connect(mapStateToProps, mapDispatchToProps)(Otp);
