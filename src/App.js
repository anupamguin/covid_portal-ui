import "./App.css";
// import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import Header from "./components/Layout/Header";
import Home from "./components/Layout/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/UserManagement/Login";
import Register from "./components/UserManagement/Register";
import Otp from "./components/UserManagement/Otp";
import React from "react";
import GlobalAlertModal from "./components/GlobalAlertModal/globalAlertModal";
import CovidMap from "./components/Layout/CovidMap";
import CovidData from "./components/Layout/CovidData";
import CovidWorldCase from "./components/Layout/CovidWorldCase";
import Contact from "./components/Layout/Contact";
import Graph from "./components/Layout/Graph";
import About from "./components/Layout/About";
import WorldData from "./components/Layout/CovidWorldCase-Component/WorldData";
import MapComponent from "./components/Layout/Maps/MapComponent";

function App() {
  return (
    <React.Fragment>
      <GlobalAlertModal />
      <BrowserRouter>
        <Header />
        <div className="landing">
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/otp" component={Otp} />
          <Route exact path="/covid-map" component={CovidMap} />
          <Route exact path="/covid-data" component={CovidData} />
          <Route exact path="/covid-world-case" component={CovidWorldCase} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/graph" component={Graph} />
          <Route exact path="/about" component={About} />
          <Route exact path="/allWorldData" component={WorldData} />
          <Route exact path="/maps" component={MapComponent} />
          {/* <Switch></Switch> */}
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
