import axios from "axios";
import {BASE_URL} from '../Constants/PathConstants';

export const loginApi = async (d)=>{
    let res = await axios.post(`${BASE_URL}/user/login`,d);
    let resp = await res.data;
    return resp;
} 

export const registerApi = async (d)=>{
    let res = await axios.post(`${BASE_URL}/user/register`,d);
    let resp = await res.data;
    return resp;
} 