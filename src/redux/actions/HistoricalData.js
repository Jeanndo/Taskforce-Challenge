import {
    GET_COUNTRY_HIST__DATA_START,
    GET_COUNTRY_HIST__DATA_SUCCESS,
    GET_COUNTRY_HIST__DATA_FAILURE
} from '../actionTypes/actionTypes';
import axios from 'axios'



const REQUEST_START = ()=>({type: GET_COUNTRY_HIST__DATA_START});

export const historicalDataByCountry = (country)=>async (dispatch)=>{

    dispatch(REQUEST_START);

    axios.get(`https://corona.lmao.ninja/v2/historical/${country}?lastdays=30`)
    .then((response)=>{
        const data = response.data;
        console.log(data)
        return dispatch({
            type:GET_COUNTRY_HIST__DATA_SUCCESS,
            payload:data
        })
    }).catch((error)=>{
        const errorMessage = error.message;
        return dispatch({
            type:GET_COUNTRY_HIST__DATA_FAILURE,
            payload:errorMessage
        })
    })

}

