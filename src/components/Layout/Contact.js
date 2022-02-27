import axios from "axios";
import React, { Component } from "react";
import { BASE_URL } from "../Constants/PathConstants";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      symptoms: "",
      age: "",
      submitResp: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const d = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message,
      symptoms: this.state.symptoms,
      age: this.state.age,
    };
    this.submitForm(d);
  };

  submitForm = async (d) => {
    let url = `${BASE_URL}/first/contactForm`;
    let resp = await axios.post(url, d);
    console.log(resp.data, "llll --");
    this.setState({
      submitResp: resp.data.message,
      name: "",
      email: "",
      subject: "",
      message: "",
      symptoms: "",
      age: "",
    });
  };

  render() {
    return (
      <div className="content" style={{ width: "100vw" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <h4 className="text-info">Contact Us</h4>
                  <h3 className="heading mb-4">Question About COVID-19?</h3>
                  <p style={{ fontSize: "1rem" }}>
                    If you have any query about coronavirus or you have a health
                    concern, you can contact via our helpline 111 or emergency
                    contact number. You can also contact by submitting form.
                  </p>

                  <p>
                    <img
                      src="images/undraw-contact.svg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </p>
                  <a
                    href="https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
                    target="_blank"
                    className="a-tag"
                  >
                    Get Contact number
                  </a>
                </div>

                <div className="col-md-6">
                  <form
                    className="mb-5"
                    id="contactForm"
                    onSubmit={this.onSubmit}
                  >
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Your name"
                          onChange={this.onChange}
                          value={this.state.name}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Email"
                          onChange={this.onChange}
                          value={this.state.email}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                          onChange={this.onChange}
                          value={this.state.subject}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          id="message"
                          cols="30"
                          rows="4"
                          placeholder="Write your message"
                          onChange={this.onChange}
                          value={this.state.message}
                        ></textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <p
                          className="text-danger"
                          style={{ fontSize: "1rem", fontWeight: 600 }}
                        >
                          You have any symptoms?
                        </p>
                        <select
                          className="form-control form-control-lg"
                          name="symptoms"
                          style={{ fontSize: "1rem" }}
                          onChange={this.onChange}
                          value={this.state.symptoms}
                        >
                          <option value="0">No I don't</option>
                          <option value="1">Yes I got all Symptoms</option>
                          <option value="2">Yes I got few of them</option>
                          <option value="3">Yes I got one of them</option>
                        </select>
                      </div>
                      <div className="col-md-6 form-group">
                        <p
                          className="text-success"
                          style={{ fontSize: "1rem", fontWeight: 600 }}
                        >
                          Age Range
                        </p>
                        <select
                          className="form-control form-control-lg"
                          name="age"
                          style={{ fontSize: "1rem" }}
                          value={this.state.age}
                          onChange={this.onChange}
                        >
                          <option value={0}>Select Priority</option>
                          <option value={1}>00-19 Years</option>
                          <option value={2}>20-29 Years</option>
                          <option value={3}>30-49 Years</option>
                          <option value={4}>50-99 Years</option>
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <input
                          type="submit"
                          value="Send Message"
                          className="btn btn-primary rounded-0 py-2 px-4"
                        />
                      </div>
                    </div>
                  </form>

                  <div id="form-message-warning mt-4"></div>
                  <div
                    id="form-message-success"
                    className="text-success"
                    style={{
                      display: this.state.submitResp ? "block" : "none",
                    }}
                  >
                    Your message was sent, thank you!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
