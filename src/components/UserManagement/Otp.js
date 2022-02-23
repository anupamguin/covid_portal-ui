import React, { Component } from "react";

export default class Otp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: "",
    };
  }

  onchng = (e) => {
    e.target.value.length <= 6 &&
      this.setState({ [e.target.name]: e.target.value });
  };

  SubmitBtn = (e) => {};

  render() {
    return (
      <div className="allbody">
        <div className="containers">
          <div className="brand-logo"></div>
          <div className="brand-title">COVID PORTAL OTP</div>
          <div className="inputs">
            <label className="onlyLabel one">One Time Password</label>
            <input
              type="text"
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
        </div>
      </div>
    );
  }
}
