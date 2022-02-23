import { DO_LOGIN, DO_REGISTER,LOGIN_SAGA,REGISTER_SAGA } from "../Constants/UserConstants"

export const do_login =(data)=>({
    type:DO_LOGIN,
    payload:data,
})

export const do_register=(data)=>({
    type:DO_REGISTER,
    payload:data,
})

export const loginApiSaga =(data)=>({
    type:LOGIN_SAGA,
    payload:data,
})

export const registerApiSaga =(data)=>({
    type:REGISTER_SAGA,
    payload:data,
})