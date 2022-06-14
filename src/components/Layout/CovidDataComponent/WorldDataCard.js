import _ from "lodash";
import React, { Component } from "react";
import DatePicker from "react-date-picker";
import { SearchBox } from "./Search-Component";

export default class WorldDataCard extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        todaysData:[],
        searchField:"",
        dateVal: new Date(),
      }
    }

    componentDidUpdate(nextProps){
        console.log(nextProps);
        if(!_.isEqual(this.props,nextProps)){
        var dateWiseData = this.props.dateWiseData;
        let lastDate = dateWiseData[dateWiseData.length - 1]
        let todays_Data = this.props.allData.filter( i => lastDate.Date == i.Date )
        console.log(todays_Data)
        if(!_.isEqual(this.state.todaysData, todays_Data))
            this.setState({todaysData: todays_Data})
       }
    }

    onSearchChange =(e)=>{
        this.setState({ searchField: e.target.value });
    }

    onChange=(e)=>{
      let ee = e.toString().split("00:00:00")[0];
      let afterDateChngData = this.props.allData.filter(item => new Date(item.Date).toString().includes(ee))
      this.setState({dateVal:e, todaysData: afterDateChngData})
    }
    
  render() {
    const { todaysData, searchField } = this.state;
    const filterCountries = todaysData.filter((item) =>
     item.Province.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div>
        <SearchBox onSearchChange={this.onSearchChange} placeholder="Search State"/>

        <div className="ml-2 mb-2">
         <DatePicker onChange={this.onChange}
          value={this.state.dateVal} 
        //   autoFocus={true}
          maxDate={new Date()}
          minDate={new Date("2021-06-21")}
          />
        </div>

     <div className="row">
     <div style={{ textAlign: "center" }} className="cvdData">
      <div className="card-list1">
        {
            filterCountries.map( i =>{
                return(                  
                    <div className="card-container1" key={i.Province}>
                    <h2> {i.Province} </h2>
                    <p>Active : {i.Active}</p>
                    <p>Confirmed: {i.Confirmed}</p>
                    <p>Date: {i.Date}</p>
                    <p>Latitude: {i.Lat}</p>
                    <p>Longitude :{i.Lon}</p>
                    <p>Country Code: {i.CountryCode} </p>
                  </div>
                )
            })
        }
        </div>
        </div>
     </div>
      </div>
    );
  }
}
