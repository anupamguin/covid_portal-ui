import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";

import CreateSagaMiddleware from "redux-saga";
import RootReducer from "./rootReducer";
import RootSaga from "./rootSaga";
import { persistStore, persistReducer } from "redux-persist"; // imports from redux-persist
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { PersistGate } from "redux-persist/integration/react";
import logger from "redux-logger";
import axios from "axios";
import { logout } from "./components/Api/UserApi";
import { SET_CURRENT_USER } from "./components/Constants/UserConstants";
import setJWTToken from "./components/security/setJWTToken";
import jwt_decode from "jwt-decode";
import { SET_GLOBAL_ALERT_MODAL } from "./components/GlobalAlertModal/globarAlertModalAction";
// import $ from "jquery";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.js";
// import "bootstrap/dist/js/bootstrap.bundle.min";

const persistConfig = {
  // configuration object for redux-persist
  key: "root",
  storage, // define which storage to use
  blacklizst: ["userReducer"],
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = CreateSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware, logger);

const store = createStore(
  // RootReducer,
  persistedReducer,
  composeEnhancers(middleware)
);

sagaMiddleware.run(RootSaga);
const persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step

const jwtToken = localStorage.jwtToken;
if (jwtToken) {
  setJWTToken(jwtToken);
  const decoded_jwtToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken,
  });

  const currentTime = Date.now() / 1000;
  if (decoded_jwtToken.exp < currentTime) {
    // handle logout
    console.log(decoded_jwtToken, "anu");
    store.dispatch(logout());
    window.location.href = "/";
  }
}

// For any backend error
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    try {
      if (404 === error.response.status) {
        console.warn("404 Error Came ");
        let endpoint = error.response.config.url.split("/")[3];
        store.dispatch({
          type: SET_GLOBAL_ALERT_MODAL,
          payload: {
            show: true,
            type: "warning",
            title: `Error with ${endpoint} endpoint`,
            message: `${endpoint} endpoint is unresponsive , Please contact to admin`,
          },
        });
      } else if (500 === error.response.status) {
        let endpoint = error.response.config.url.split("/")[3];
        console.log(endpoint, "    ", error.response.config.url);
        store.dispatch({
          type: SET_GLOBAL_ALERT_MODAL,
          payload: {
            show: true,
            type: "info",
            title: `Error with ${endpoint} endpoint`,
            message: `${endpoint} endpoint is unresponsive , Please contact to admin`,
          },
        });
      } else if (401 === error.response.status) {
        let endpoint = error.response.config.url.split("/")[3];
        console.log(endpoint, "    ", error.response.config.url);
        store.dispatch({
          type: SET_GLOBAL_ALERT_MODAL,
          payload: {
            show: true,
            type: "info",
            title: `You are Unauthoried`,
            message: `Please give the right Username & Password`,
          },
        });
      } else return Promise.reject(error);
    } catch (err) {
      console.log("error came in index.js");
    }
  }
);

// axios.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     try {
//       if (401 === error.response.status) {
//         store.dispatch({
//           type: "RESET",
//         });

//         store.dispatch({
//           type: SET_GLOBAL_ALERT_MODAL,
//           payload: {
//             show: true,
//             type: "info",
//             title: "Expired",
//             message: "Session has expired please login again!",
//           },
//         });
//       } else if ([404, 500].includes(error.response.status)) {
//         let endpoint = error.response.config.url.split("/")[3];
//         store.dispatch({
//           type: SET_GLOBAL_ALERT_MODAL,
//           payload: {
//             show: true,
//             type: "warning",
//             title: `Error with ${endpoint} endpoint`,
//             message: `${endpoint} endpoint is unresponsive, please contact admin`,
//           },
//         });
//       } else {
//         return Promise.reject(error);
//       }
//     } catch (err) {
//       store.dispatch({
//         type: SET_GLOBAL_ALERT_MODAL,
//         payload: {
//           show: true,
//           type: "warning",
//           title: `Error communicating with backend`,
//           message: `The application is unresponsive or the network is down, please check and contact admin`,
//         },
//       });
//     }
//   }
// );

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App store={store} />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
