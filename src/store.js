import { applyMiddleware, compose, createStore } from "redux";

import CreateSagaMiddleware from "redux-saga";
import RootReducer from "./rootReducer";
import RootSaga from "./rootSaga";
import { persistStore, persistReducer } from "redux-persist"; // imports from redux-persist
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import logger from "redux-logger";

const persistConfig = {
  // configuration object for redux-persist
  key: "root",
  storage, // define which storage to use
  // blacklist: ["userReducer"],
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
export const persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step
export default store;
