import { combineReducers } from "redux";
import userReducer from './components/Reducer/UserReducer';

const RootReducer = combineReducers({
    userReducer,
    
  });
  export default RootReducer;
  