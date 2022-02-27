import {
  GET_ERRORS,
  LOGIN_SAGA,
  OTP_SUBMIT_SAGA,
  REGISTER_SAGA,
  SET_CURRENT_USER,
  RESET,
} from "../Constants/UserConstants";

let defaultState = {
  loginResponse: {},
  registerResponse: {},
  otpSubmitResponse: {},
  errorReducer: {},
  setCurrentUserReducer: {
    user: {},
    validToken: false,
  },
};

const booleanActionPayload = (payload) => {
  if (Object.keys(payload).length) {
    console.warn(payload, "True");
    return true;
  } else {
    console.warn(payload, "False");
    return false;
  }
};

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case LOGIN_SAGA:
      return { ...state, loginResponse: action.payload };
    case REGISTER_SAGA:
      return { ...state, registerResponse: action.payload };
    case OTP_SUBMIT_SAGA:
      return { ...state, otpSubmitResponse: action.payload };
    case GET_ERRORS:
      return { ...state, errorReducer: action.payload };
    case SET_CURRENT_USER:
      return {
        ...state,
        setCurrentUserReducer: {
          user: action.payload,
          validToken: booleanActionPayload(action.payload),
        },
      };
    case RESET:
      return defaultState;
    default:
      return state;
  }
}
