import { all, call } from "redux-saga/effects";
import MapSaga from "./components/Saga/MapSaga";
import UserSaga from "./components/Saga/UserSaga";

export default function* rootSaga() {
  yield all([call(UserSaga), call(MapSaga)]);
}
