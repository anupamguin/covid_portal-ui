import { combineReducers } from "redux";
import userReducer from "./components/Reducer/UserReducer";
import globalModalReducer from "./components/GlobalAlertModal/globalAlertModalReducer";
import MapReducer from "./components/Reducer/MapReducer";

const RootReducer = combineReducers({
  userReducer,
  globalModalReducer,
  MapReducer,
});
export default RootReducer;
