import axios from "axios";
import { BASE_URL } from "../Constants/PathConstants";
import jwt_decode from "jwt-decode";
import setJWTToken from "../security/setJWTToken";
import { RESET, SET_CURRENT_USER } from "../Constants/UserConstants";

export const loginApi = async (d) => {
  let res = await axios.post(`${BASE_URL}/user/login`, d);

  // extract token from res.data
  const { token } = res.data;
  // store the token in local Storage
  localStorage.setItem("jwtToken", token);
  // set our token in header
  setJWTToken(token);

  let resp = await res.data;
  return resp;
};

export const registerApi = async (action) => {
  console.log("Action at API", action);
  const regData = action.payload[0];
  const props = action.payload[1];
  try {
    let res = await axios.post(`${BASE_URL}/user/register`, regData);
    let resp = await res.data;
    props.errorReducer({});
    return resp;
  } catch (err) {
    console.log(err.response.data);
    props.errorReducer(err.response.data);
  }
};

export const otpSubmitApi = async (action) => {
  console.log("Action at OTP Api", action);
  const otpData = action.payload[0];
  const props = action.payload[1];
  try {
    let res = await axios.get(
      `${BASE_URL}/user/otp?id=${otpData.id}&otp=${otpData.otp}`
    );
    console.log(res, "res top");
    let resp = await res.data;
    return resp;
  } catch (err) {
    console.log(err);
  }
};

export const logout = (props) => {
  console.log("came toooo");
  localStorage.removeItem("jwtToken");
  setJWTToken(false);
  props.resetReducer();
  // dispatch({
  //   type: SET_CURRENT_USER,
  //   payload: {},
  // });
};
