import {
    GET_CONTINENT_DATA_START,
    GET_CONTINENT_DATA_SUCCESS,
    GET_CONTINENT_DATA_FAILURE
} from '../actionTypes/actionTypes';
import axios from 'axios'

const REQUEST_START = ()=>({type:GET_CONTINENT_DATA_START});

export const getCovidDataAction = ()=> async (dispatch)=>{

    dispatch(REQUEST_START());
     axios.get('https://corona.lmao.ninja/v2/continents?yesterday=true&sort')
     .then((response)=>{
         const data =response.data;
        //  console.log(data);
         return dispatch({
             type:GET_CONTINENT_DATA_SUCCESS,
             payload:data
         })
     }).catch((error)=>{
         const errorMessage  = error.message;
         return dispatch({
         type:GET_CONTINENT_DATA_FAILURE,
         payload:errorMessage
         })
     })
}