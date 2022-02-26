import { call, put, takeLatest } from "redux-saga/effects";
import { mapCountriesSaga } from "../Actions/MapActions";
import { mapCountriesApi } from "../Api/MapApi";
import { MAP_COUNTRIES } from "../Constants/MapConstants";

function* map_Countries() {
  try {
    let data = yield call(mapCountriesApi);
    yield put(mapCountriesSaga(data));
  } catch (err) {
    console.log(err);
  }
}

export default function* MapSaga() {
  yield takeLatest(MAP_COUNTRIES, map_Countries);
}
