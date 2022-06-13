import axios from 'axios';
import React, { Component } from 'react'
import { CardList } from '../CovidDataComponent/CardList-Component'
import { SearchBox } from '../CovidDataComponent/Search-Component'
import WorldDataCard from '../CovidDataComponent/WorldDataCard';

export default class WorldData extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        covidAll: {},
        covidCountries: [],
        searchField: "",
        dateWiseData:[],
      };
    }

    componentDidMount() {
        this.coronaCountriesApi();
    }

    coronaCountriesApi = async () => {
        const resp = await (
          await axios.get("https://api.covid19api.com/live/country/india")
        ).data;
        console.log(resp);
        
        this.groupToData(resp);
        this.setState({ covidCountries: resp });
      };

    groupToData=(data)=>{
      let country=[];
      data.forEach(function (a) {
            let key = a.Date ;
            if (!this[key]) {
                this[key] = { Date: a.Date, count: 0};
                country.push(this[key]);
            }
            this[key].count += 1;
        }, Object.create(null));
      this.setState({dateWiseData: country ,covidCountries: data})
    }    


  render() {
   
    return (
        <div style={{ textAlign: "center" }} className="cvdData">
        <h1>Covid Information in Our Country</h1>       
        <WorldDataCard allData={this.state.covidCountries} dateWiseData={this.state.dateWiseData}/>
      </div>
    )
  }
}
