import axios from 'axios';
import React, { Component } from 'react'
import StateWiseMap from './StateWiseMap'

export default class MapComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        covidCountries:[],
        currentDateData:[],
      }
    }
    componentDidMount() {
        this.coronaCountriesApi();
      }
    
      coronaCountriesApi = async () => {
        const resp = await (
          await axios.get("https://api.covid19api.com/live/country/india")
        ).data;
        this.setState({ covidCountries: resp });

        console.log(resp);
        this.groupByFilter(resp);
      };

      groupByFilter=(data)=>{
        let country=[];
        let datas = data[data.length -1].Date;

        let currentDtData = data.filter(i => i.Date == datas);
        console.log(currentDtData); // Current Date data that show on marker
        this.setState({dateWiseData: country ,covidCountries: data, currentDateData:currentDtData})
      }

  render() {
    return (
        <div style={{textAlign:'center',width:'90vw',marginLeft:'5vw',marginTop:"2vh" , border:'2px solid black'}}>           
        <div id="map" width>
         <StateWiseMap currentDtData={this.state.currentDateData}/>
        </div>
        </div>
    )
  }
}
