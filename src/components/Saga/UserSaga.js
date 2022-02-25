import { call, put, takeLatest } from "redux-saga/effects";
import { DO_LOGIN, DO_REGISTER, OTP_SUBMIT } from "../Constants/UserConstants";
import { loginApi, registerApi, otpSubmitApi } from "../Api/UserApi";
import {
  loginApiSaga,
  registerApiSaga,
  otp_SubmitSaga,
  setCurrentUser,
} from "../Actions/UserActions";
import jwt_decode from "jwt-decode";

function* do_login({ payload }) {
  try {
    let data = yield call(loginApi, payload);
    yield put(loginApiSaga(data));

    let token;
    if (data.success) token = data.token;
    console.log(token, "token");

    // decode token on React
    const decoded = jwt_decode(token);
    yield put(setCurrentUser(decoded));
  } catch (err) {
    console.error(err);
  }
}

function* do_register(payload) {
  try {
    let data = yield call(registerApi, payload);
    yield put(registerApiSaga(data));
  } catch (err) {
    console.error(err);
  }
}

function* otp_Submit(payload) {
  try {
    let data = yield call(otpSubmitApi, payload);
    yield put(otp_SubmitSaga(data));
  } catch (err) {
    console.error(err);
  }
}

export default function* UserSaga() {
  yield takeLatest(DO_LOGIN, do_login);
  yield takeLatest(DO_REGISTER, do_register);
  yield takeLatest(OTP_SUBMIT, otp_Submit);
}
