import {LOGIN_SAGA,REGISTER_SAGA} from '../Constants/UserConstants';

let defaultState ={}

export default function userReducer(state=defaultState,action){
    switch(action.type){
        case LOGIN_SAGA: return { ...state, loginResponse: action.payload}
        case REGISTER_SAGA: return {...state, registerResponse: action.payload};
        default: return state;
    }
}