import {
    GET_DATA_START,
    GET_DATA_SUCCESS,
    GET_DATA_FAILURE
} from '../actionTypes/actionTypes';
import axios from 'axios'

const requestSart = ()=>({type:GET_DATA_START});

export const getCovidDataAction = ()=> async (dispatch)=>{

    dispatch(requestSart());
     axios.get('https://corona.lmao.ninja/v2/continents?yesterday&sort')
     .then((covid_19_data)=>{
         const data = covid_19_data;
         console.log(data);
         return dispatch({
             type:GET_DATA_SUCCESS,
             payload:data
         })
     }).catch((error)=>{
         const errorMessage  = error.message;
         return dispatch({
         type:GET_DATA_FAILURE,
         payload:errorMessage
         })
     })
}