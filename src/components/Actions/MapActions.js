import { MAP_COUNTRIES, MAP_COUNTRIES_SAGA } from "../Constants/MapConstants";

export const mapCountries = () => {
  return { type: MAP_COUNTRIES };
};

export const mapCountriesSaga = (data) => ({
  type: MAP_COUNTRIES_SAGA,
  payload: data,
});
