import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import _ from "lodash";
import React, { useState } from "react";
// import MapInfoWindow from "./mapInfoWindow";
// import ViewAssetDetails from "./ViewAssetDetails";
// import ResetButton from "./ResetButton";
// import GeofencePolygon from "../LeftTab/Geofence/GeofencePolygon";
// import GeofenceModal from "../LeftTab/GeofenceModal/GeofenceModal";
// // import GeofenceTab from "../LeftTab/Geofence/GeofenceTab";
// import { GOOGLEMAP_API_KEY } from "../../../../pathConstants";
// import Circle from "react-google-maps/lib/components/Circle";
// import { useGoogleMap } from "@react-google-maps/api";
const { InfoWindow } = require("react-google-maps/lib/components/InfoWindow");
const {
  MarkerClusterer,
} = require("react-google-maps/lib/components/addons/MarkerClusterer");

const MapComponent = compose(
  withProps({
    // googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=AIzaSyCaE9TefacSBMgvaBigSMvMkwPAL71NcDQ&libraries=visualization&libraries=geometry,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `73vh`, top: "0px" }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => {
  const [mapCenter, setMapCenter] = useState({ lat: 22.72683, lng: 82.56212 });
  const [mapZoomSet, setMapZoomSet] = useState(4);
  const [openWaypointInfoWindow, setOpenWaypointInfoWindow] = useState("");

  const handleOnLoad = (maps) => {
    console.warn(maps, "   came");
    // setMapRef(maps);
  };

  const handleToggleClose = () => {
    console.warn("cllos");
  };
  var _googleMapComponent = null;
  return (
    <React.Fragment>
      <GoogleMap
        streetViewControl={false}
        zoom={mapZoomSet}
        // onZoomChanged={props.onZoomChanged}
        center={mapCenter}
        options={{ minZoom: 4 }}
        layerTypes={["TrafficLayer", "TransitLayer"]}
        ref={(map) => (_googleMapComponent = map)}
        onTilesLoaded={() => handleOnLoad(_googleMapComponent)} // First time map loading time
      >
        {props.currentDtData &&
          props.currentDtData.map((i, index) => {
            console.log(i);
            return (
              <Marker
                position={{ lat: parseFloat(i.Lat), lng: parseFloat(i.Lon) }}
                key={index}
                icon={{
                  url: `https://maps.google.com/mapfiles/ms/icons/green-dot.png`,
                  // url: "https://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_purple.png",
                  // url: "https://maps.google.com/mapfiles/ms/micons/orange.png",
                  // url: "https://chart.apis.google.com/chart?chst=d_map_spin&chld=0.2|0|6699FF|9|_|",
                  // path: window.google.maps.SymbolPath.CIRCLE,
                  // scaledSize: new window.google.maps.Size(15, 15),
                  // anchor: new window.google.maps.Point(5, 58),
                }}
                onClick={() => {
                  setOpenWaypointInfoWindow(i.Province);
                  // props.click_waypoint(i);
                }}
              >
                {openWaypointInfoWindow &&
                  openWaypointInfoWindow === i.Province && (
                    <InfoWindow
                      onCloseClick={() => setOpenWaypointInfoWindow("")}
                    >
                      {
                        <div
                          style={{
                            border: "2px solid grey",
                            borderRadius: "5px",
                          }}
                        >
                          {/* <span className="h6 infoWindowStyle">State: {i.Province}</span><br/>
           <span className="h5 infoWindowStyle"><span className="badge badge-success">Confirmed : </span>{i.Confirmed}</span><br/>
           <span className="h6 infoWindowStyle"><span className="badge badge-success">Active:</span> {i.Active}</span><br/>
           <span className="h6 infoWindowStyle"><span className="badge badge-success">Deaths :</span> {i.Deaths}</span><br/>
           <span className="h6 infoWindowStyle"><span className="badge badge-success">Date: </span>{i.Date}</span><br/>
           <span className="h6 infoWindowStyle"><span className="badge badge-success">Country :</span> {i.Country}</span><br/> */}
                          <table>
                            <tr>
                              <th>
                                <span>State: </span>
                              </th>
                              <td>{i.Province}</td>
                            </tr>
                            <tr>
                              <th>Confirmed: </th>
                              <td>{i.Confirmed}</td>
                            </tr>
                            <tr>
                              <th>Active: </th>
                              <td>{i.Active}</td>
                            </tr>
                            <tr>
                              <th>Deaths: </th>
                              <td>{i.Deaths}</td>
                            </tr>
                            <tr>
                              <th>Date: </th>
                              <td>{i.Date}</td>
                            </tr>
                            <tr>
                              <th>Country: </th>
                              <td>{i.Country}</td>
                            </tr>
                          </table>
                        </div>
                      }
                    </InfoWindow>
                  )}
              </Marker>
            );
          })}
      </GoogleMap>
    </React.Fragment>
  );
});

export default MapComponent;
