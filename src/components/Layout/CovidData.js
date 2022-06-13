import axios from "axios";
import React, { Component } from "react";
import { CardList } from "./CovidDataComponent/CardList-Component";
import { SearchBox } from "./CovidDataComponent/Search-Component";

class CovidData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      covidAll: {},
      covidCountries: [],
      searchField: "",
    };
  }

  componentDidMount() {
    this.coronaCountriesApi();
  }

  coronaCountriesApi = async () => {
    const resp = await (
      await axios.get("https://corona.lmao.ninja/v2/countries")
    ).data;
    console.log(resp);
    this.setState({ covidCountries: resp });
  };

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { covidCountries, searchField } = this.state;
    const filterCountries = covidCountries.filter((item) =>
      item.country.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div style={{ textAlign: "center" }} className="cvdData">
        <h1>Covid Information</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList countriesData={filterCountries} />
      </div>
    );
  }
}
export default CovidData;
