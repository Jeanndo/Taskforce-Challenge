import {
    GET_GLOBAL_STATS_START,
    GET_GLOBAL_STATS_SUCCESS ,
    GET_GLOBAL_STATS_FAILURE
} from '../actionTypes/actionTypes'

import axios from 'axios';

const REQUEST_START= ()=>({type:GET_GLOBAL_STATS_START})

export const globaldataAction = ()=>async (dispatch)=>{

dispatch( REQUEST_START());
axios.get('https://corona.lmao.ninja/v2/all?yesterday')
.then((response)=>{
    const data = response.data;
    // console.log(data)
    return dispatch({
        type: GET_GLOBAL_STATS_SUCCESS,
        payload: data
    })
}).catch((error)=>{
    const errorMessage = error.message;

    return dispatch({
    type:GET_GLOBAL_STATS_FAILURE,
    payload:errorMessage
    })
})

}