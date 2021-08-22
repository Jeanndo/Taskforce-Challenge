/**
 * Getting action types from :actionTypes/actionTypes file.
 * @constant
 * @type {string}
 */
import {
  GET_COUNTRY_HIST__DATA_START,
  GET_COUNTRY_HIST__DATA_SUCCESS,
  GET_COUNTRY_HIST__DATA_FAILURE,
} from "../actionTypes/actionTypes";
/**
 * Getting axios for handling https requests for our external API.
 *
 */

import axios from "axios";
/**
 * Creating starting point for action creator.
 * Returns a special anonymous function of type object.
 * @returns {string} type :GET_COUNTRY_HIST__DATA_START
 */
const REQUEST_START = () => ({ type: GET_COUNTRY_HIST__DATA_START });
/**
 *  Action creator for handling https requests to get historical covid-19 data by country using axios.
 * @async
 * @function historicalDataByCountry
 * @param {string} country the country name we want to fetch data from.
 * @returns {Promise} Promise object represents the data from get https request.
 *
 */
export const historicalDataByCountry = (country,date) => async (dispatch) => {
  dispatch(REQUEST_START);

  axios
    .get(`https://corona.lmao.ninja/v2/historical/${country}?lastdays=30`)
    .then((response) => {
      const data = response.data.timeline;
      console.log(data)
      const selectedDate = date
      return dispatch({
        type: GET_COUNTRY_HIST__DATA_SUCCESS,
        payload:{
          data,
          selectedDate
        },
      });
    })
    .catch((error) => {
      const errorMessage = error.message;
      return dispatch({
        type: GET_COUNTRY_HIST__DATA_FAILURE,
        payload: errorMessage,
      });
    });
};
