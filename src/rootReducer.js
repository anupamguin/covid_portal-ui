import { combineReducers } from "redux";
import userReducer from "./components/Reducer/UserReducer";
import globalModalReducer from "./components/GlobalAlertModal/globalAlertModalReducer";

const RootReducer = combineReducers({
  userReducer,
  globalModalReducer,
});
export default RootReducer;
