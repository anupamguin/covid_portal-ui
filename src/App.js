import "./App.css";
import Header from "./components/Layout/Header";
import Home from "./components/Layout/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/UserManagement/Login";
import Register from "./components/UserManagement/Register";
import Otp from "./components/UserManagement/Otp";
import Spinner from './components/GenericsComponent/Spinner';
import React, { Suspense } from "react";

function App() {
  return (
    <React.Fragment>
     <Suspense fallback={<Spinner/>}>
      <BrowserRouter>
        <Header />
        <div className="landing">
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/otp" component={Otp} />
          {/* <Switch></Switch> */}
        </div>
      </BrowserRouter>
      </Suspense>
      </React.Fragment>
  );
}

export default App;
