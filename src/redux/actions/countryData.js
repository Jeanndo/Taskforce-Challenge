/**
 * Getting action types from :actionTypes/actionTypes file.
 * @constant
 * @type {string}
 */

import {
  GET_COUNTRY_DATA_START,
  GET_COUNTRY_DATA_SUCCESS,
  GET_COUNTRY_DATA_FAILURE,
} from "../actionTypes/actionTypes";

/**
 * Getting axios for handling https requests for our external API.
 *
 */
import axios from "axios";

/**
 * Creating starting point for action creator.
 * Returns a special anonymous function of type object.
 * @returns {string} type :GET_COUNTRY_DATA_START
 */
const REQUEST_START = () => ({ type: GET_COUNTRY_DATA_START });

/**
 *  Action creator for handling https requests to get a specific country covid data using axios.
 * @async
 * @function countryDataAction
 * @param {string} country the country name we want to fetch data from.
 * @returns {Promise} Promise object represents the data from get https request.
 *
 */
export const countryDataAction = (country) => async (dispatch) => {
  dispatch(REQUEST_START);
  axios
    .get(
      `https://corona.lmao.ninja/v2/countries/${country}?yesterday&strict&query`
    )
    .then((response) => {
      const data = response.data;
      console.log(data)
      return dispatch({
        type: GET_COUNTRY_DATA_SUCCESS,
        payload: data,
      });
    })
    .catch((error) => {
      const errorMessage = error.message;
      return dispatch({
        type: GET_COUNTRY_DATA_FAILURE,
        payload: errorMessage,
      });
    });
};
