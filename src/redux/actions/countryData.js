import {
    GET_COUNTRY_DATA_START,
    GET_COUNTRY_DATA_SUCCESS,
    GET_COUNTRY_DATA_FAILURE
} from '../actionTypes/actionTypes';
import axios from 'axios';
const REQUEST_START = ()=>({type:GET_COUNTRY_DATA_START});


export const countryDataAction = (country)=>async(dispatch)=>{

    dispatch(REQUEST_START);
    axios.get(`https://corona.lmao.ninja/v2/countries/${country}?yesterday&strict&query`)
    .then((response)=>{

        const data =  response.data;
        console.log(data);
        return dispatch({
            type:GET_COUNTRY_DATA_SUCCESS,
            payload:data
        })
    }).catch((error)=>{
        const errorMessage = error.message
        return dispatch({
            type:GET_COUNTRY_DATA_FAILURE,
            payload:errorMessage
            
        })
    })

}