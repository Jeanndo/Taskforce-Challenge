/**
 * Getting action types from :actionTypes/actionTypes file.
 * @constant
 * @type {string}
 */
import {
  GET_CONTINENT_DATA_START,
  GET_CONTINENT_DATA_SUCCESS,
  GET_CONTINENT_DATA_FAILURE,
} from "../actionTypes/actionTypes";

/**
 * Getting axios for handling https requests for our external API.
 *
 */
import axios from "axios";

/**
 * Creating starting point for action creator.
 * Returns a special anonymous function of type object.
 * @function
 * @returns {string} type :GET_CONTINENT_DATA_START
 */

const REQUEST_START = () => ({ type: GET_CONTINENT_DATA_START });

/**
 * Action creator for handling https requests to get all continents data using axios.
 *
 * @async
 * @function getCovidDataAction
 * @returns {Promise} Promise object represents the data from get https request.
 *
 */

export const getCovidDataAction = () => async (dispatch) => {
  dispatch(REQUEST_START());
  axios
    .get("https://corona.lmao.ninja/v2/continents?yesterday=true&sort")
    .then((response) => {
      const data = response.data;
      return dispatch({
        type: GET_CONTINENT_DATA_SUCCESS,
        payload: data,
      });
    })
    .catch((error) => {
      const errorMessage = error.message;
      return dispatch({
        type: GET_CONTINENT_DATA_FAILURE,
        payload: errorMessage,
      });
    });
};
