import React, { Component } from "react";
import { Audio } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class Loader extends Component {
  render() {
    return <Audio height="100" width="100" color="grey" ariaLabel="loading" />;
  }
}
