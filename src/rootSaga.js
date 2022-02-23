import { all, call } from "redux-saga/effects";
import  UserSaga  from "./components/Saga/UserSaga";

export default function* rootSaga() {
    yield all([
      call(UserSaga),
    ]);
  }