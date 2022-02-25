import {
  DO_LOGIN,
  DO_REGISTER,
  GET_ERRORS,
  LOGIN_SAGA,
  REGISTER_SAGA,
  OTP_SUBMIT,
  OTP_SUBMIT_SAGA,
  SET_CURRENT_USER,
} from "../Constants/UserConstants";

export const do_login = (data) => ({
  type: DO_LOGIN,
  payload: data,
});

export const do_register = (data, props) => {
  return {
    type: DO_REGISTER,
    payload: [data, props],
  };
};

export const loginApiSaga = (data) => ({
  type: LOGIN_SAGA,
  payload: data,
});

export const registerApiSaga = (data) => ({
  type: REGISTER_SAGA,
  payload: data,
});

export const errorReducer = (data) => ({
  type: GET_ERRORS,
  payload: data,
});

export const otpSubmit = (data, props) => ({
  type: OTP_SUBMIT,
  payload: [data, props],
});

export const otp_SubmitSaga = (data) => ({
  type: OTP_SUBMIT_SAGA,
  payload: data,
});

export const setCurrentUser = (data) => ({
  type: SET_CURRENT_USER,
  payload: data,
});
