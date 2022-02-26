import "./App.css";
// import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Layout/Header";
import Home from "./components/Layout/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/UserManagement/Login";
import Register from "./components/UserManagement/Register";
import Otp from "./components/UserManagement/Otp";
import React from "react";
import GlobalAlertModal from "./components/GlobalAlertModal/globalAlertModal";
import CovidMap from "./components/Layout/CovidMap";

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
          <Route exact path="/covidMap" component={CovidMap} />
          {/* <Switch></Switch> */}
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
