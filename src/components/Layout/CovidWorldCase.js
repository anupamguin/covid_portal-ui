import axios from "axios";
import React, { Component } from "react";
import { FirstCard } from "./CovidWorldCase-Component/FirstCard";
import { SecondCard } from "./CovidWorldCase-Component/SecondCard";
import { ThirdCard } from "./CovidWorldCase-Component/ThirdCard";

class CovidWorldCase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      covidAll: {},
    };
  }

  componentDidMount() {
    this.coronaAll();
  }

  coronaAll = async () => {
    const resp = await axios.get("https://corona.lmao.ninja/v2/all");
    console.log(resp.data);
    this.setState({ covidAll: resp.data });
  };
  render() {
    const { covidAll } = this.state;

    const date = new Date(parseInt(covidAll.updated));
    const lastUpdated = date.toString();
    let updateMSG = "Last updated " + lastUpdated;

    return (
      <>
        <div className="row" style={{ width: "100vw", marginTop: "2rem" }}>
          <div className="col-sm-12 col-md-12 col-lg-4">
            <FirstCard data={covidAll} updateMSG={updateMSG} />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4">
            <SecondCard data={covidAll} updateMSG={updateMSG} />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4">
            <ThirdCard data={covidAll} updateMSG={updateMSG} />
          </div>
        </div>
      </>
    );
  }
}
export default CovidWorldCase;
