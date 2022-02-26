import axios from "axios";
import { MAP_COUNTRIES_URL } from "../Constants/PathConstants";

export const mapCountriesApi = async () => {
  try {
    let res = await axios.get(MAP_COUNTRIES_URL);
    let resp = await res.data;
    return resp;
  } catch (error) {
    console.log(error);
  }
};
