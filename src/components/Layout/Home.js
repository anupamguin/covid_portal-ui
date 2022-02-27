import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <>
        {/* <div className="title">Responsive Dropdown and Mega Menu</div>
        <div className="sub-title">using only HTML & CSS</div> */}
        <img src="/images/world.png" alt="Corona" style={{ width: "100%" }} />
        {/* <img src="/images/02.jpg" alt="Corona" />
        <br />
        <img src="/images/corona2.png" alt="Corona" />
        <br />
        <img src="/images/corona3.png" alt="Corona" />
        <br /> */}
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h3 className="text-success ">Symptoms of Coronavirus</h3>
              The most common symptoms of COVID-19 are fever, tiredness, and dry
              cough. Some patients may have aches and pains, nasal congestion,
              runny nose, sore throat or diarrhea. These symptoms are usually
              mild and begin gradually. Also the symptoms may appear 2-14 days
              after exposure.
            </div>

            <div className="col-6">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    <span className="badge badge-danger"> High Fever</span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    <h6>
                      <span className="badge badge-info">Continuous cough</span>
                    </h6>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    <h5>
                      <span className="badge badge-warning">
                        Difficulty breathing
                      </span>
                    </h5>
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-4">
                      <img
                        alt="Fever"
                        src="images/fever.png"
                        width="100px"
                        height="100px"
                        style={{ marginLeft: "20px", marginTop: "20px" }}
                      />
                    </div>
                    <div className="col-8">
                      <p
                        style={{
                          color: "#e74292",
                          fontSize: "1rem",
                          fontFamily: "Times New Roman', Times, serif",
                        }}
                      >
                        This means you feel hot to touch on your chest or back
                        (you do not need to measure your temperature). It is a
                        common sign and also may appear in 2-10 days if you
                        affected.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row">
                    <div className="col-4">
                      <img
                        alt="Fever"
                        src="images/cough.png"
                        width="100px"
                        height="100px"
                        style={{ marginLeft: "20px", marginTop: "20px" }}
                      />
                    </div>
                    <div className="col-8">
                      <p
                        style={{
                          fontSize: "1rem",
                          fontFamily: "Times New Roman', Times, serif",
                        }}
                      >
                        This means coughing a lot for more than an hour, or 3 or
                        more coughing episodes in 24 hours (if you usually have
                        a cough, it may be worse than usual).
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <div className="row">
                    <div className="col-4">
                      <img
                        alt="Fever"
                        src="images/breathing.png"
                        width="100px"
                        height="100px"
                        style={{ marginLeft: "20px", marginTop: "20px" }}
                      />
                    </div>
                    <div className="col-8">
                      <p
                        style={{
                          color: "blue",
                          fontSize: "1rem",
                          fontFamily: "Times New Roman', Times, serif",
                        }}
                      >
                        Around 1 out of every 6 people who gets COVID-19 becomes
                        seriously ill and develops difficulty breathing or
                        shortness of breath.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Home;
