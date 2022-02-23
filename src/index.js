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
// import $ from "jquery";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.js";
// import "bootstrap/dist/js/bootstrap.bundle.min";

const persistConfig = {
  // configuration object for redux-persist
  key: "root",
  storage, // define which storage to use
  blacklist: ["userReducer"],
};

const persistedReducer = persistReducer(persistConfig,RootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = CreateSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware,logger);

const store = createStore(
  // RootReducer,
  persistedReducer,
  composeEnhancers(middleware)
);

sagaMiddleware.run(RootSaga);
const persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step



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
