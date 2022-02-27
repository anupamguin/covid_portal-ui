import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div
        className="container"
        style={{ width: "100vw", textAlign: "center" }}
      >
        {/* <div className>
          <h1 style={{ textAlign: "center" }}>My Resume</h1>
        </div> */}
        <img src="/images/resume.jpg" alt="RESUME" width="70%" height="40%" />
      </div>
    );
  }
}
export default About;
