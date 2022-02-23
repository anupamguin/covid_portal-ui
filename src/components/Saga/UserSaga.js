import { call, put, takeLatest } from "redux-saga/effects";
import {DO_LOGIN,DO_REGISTER} from '../Constants/UserConstants';
import {loginApi,registerApi} from '../Api/UserApi';
import {loginApiSaga,registerApiSaga} from '../Actions/UserActions';

function* do_login({payload}){
    try {
        let data = yield call(loginApi,payload);
        yield put(loginApiSaga(data))
    } catch (err) {
        console.error(err);
    }
}

function* do_register({payload}){
    try {
        let data = yield call(registerApi,payload);
        yield put(registerApiSaga(data))
    } catch (err) {
        console.error(err);
    }
}

export default function* UserSaga(){
    yield takeLatest(DO_LOGIN,do_login);
    yield takeLatest(DO_REGISTER,do_register);
}