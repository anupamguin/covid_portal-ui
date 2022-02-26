import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { connect } from "react-redux";
import { mapCountries } from "../Actions/MapActions";
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

var countriesLocation = [];

class CovidMap extends Component {
  componentDidMount() {
    this.props.mapCountries();
  }
  componentWillReceiveProps(nextProps) {
    countriesLocation = nextProps.mapCountriesReducer.map((data, i) => {
      return (
        <div
          lat={data.countryInfo.lat}
          lng={data.countryInfo.long}
          style={{
            color: "red",
            background: "#fff",
            height: "35px",
            width: "65px",
            textAlign: "center",
            borderRadius: "20px",
          }}
        >
          <img height="10px" src={data.countryInfo.flag} />
          <br />
          {data.cases}
        </div>
      );
    });
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <h1 style={{ textAlign: "center" }}>Covid Data All over World</h1>
          <div className="map-page-center">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyCaE9TefacSBMgvaBigSMvMkwPAL71NcDQ",
              }}
              defaultCenter={{ lat: 22.9734, lng: 78.6569 }}
              defaultZoom={5}
            >
              {/* <AnyReactComponent lat={22.9734} lng={78.6569} text="My Marker" /> */}
              {countriesLocation}
            </GoogleMapReact>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  mapCountriesReducer: state.MapReducer.mapCountries
    ? state.MapReducer.mapCountries
    : [],
});
const mapDispatchToProps = {
  mapCountries,
};

export default connect(mapStateToProps, mapDispatchToProps)(CovidMap);
