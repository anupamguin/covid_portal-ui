import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div
        className="container ourDetails"
        style={{ width: "100vw", height:'100vh', textAlign: "center" }}
      >
        {/* <div className>
          <h1 style={{ textAlign: "center" }}>My Resume</h1>
        </div> */}
        {/* <img src="/images/resume.jpg" alt="RESUME" width="70%" height="40%" /> */}
        <div className="row">
          <h2><span className="badge badge-success">Meet Our Team</span></h2>
          {/* <img alt="image" src="images/ourteam.jpg" /> */}
          <div className="col-4">
            <h5 style={{background:'yellow'}}>Sudhansu Sekhar Jena</h5>
            <h5 style={{background:'yellow'}}>Animesh Khan</h5>
            <h5 style={{background:'yellow'}}>Anupam Guin</h5>
          </div>
          <div className="col-8">
            <span style={{background:'#46e0e8'}}>We are the 4th Year Students from Templecity Institute of Technology and Engineering. and here we tring to make 
            something useful. By this site we are trying give real Data and some information related COVID-19. In future we are trying to expand Vaccination count Data.
            </span>
          </div>
        </div>
        <div className="row" style={{height:'200px'}}>
          <div className="col-12">
          </div>
        </div>
        <div className="row">
          <div className="col-8">

          </div>
          <div className="col-4">
          <h5 style={{background:'pink'}}> For other details Please Contact Us : </h5> <br/>
            <h5 style={{background:'grey'}}>anupamguin7585@gmail.com</h5> <br/>
            <h5 style={{background:'grey'}}>animeshkhan67@gmail.com</h5> <br/>
            <h5 style={{background:'grey'}}>sudhansujena191@gmail.com</h5>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
