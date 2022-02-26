import { MAP_COUNTRIES_SAGA } from "../Constants/MapConstants";

let initialState = { mapCountries: [] };
export default function MapReducer(state = initialState, action) {
  switch (action.type) {
    case MAP_COUNTRIES_SAGA:
      return {
        ...state,
        mapCountries: action.payload,
      };
    default:
      return state;
  }
}
