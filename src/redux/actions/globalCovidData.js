/**
 * Getting action types from :actionTypes/actionTypes file.
 * @constant
 * @type {string}
 */
import {
  GET_GLOBAL_STATS_START,
  GET_GLOBAL_STATS_SUCCESS,
  GET_GLOBAL_STATS_FAILURE,
} from "../actionTypes/actionTypes";
/**
 * Getting axios for handling https requests for our external API.
 *
 */
import axios from "axios";
/**
 * Creating starting point for action creator.
 * Returns a special anonymous function of type object.
 * @returns {string} type :GET_GLOBAL_STATS_START
 */
const REQUEST_START = () => ({ type: GET_GLOBAL_STATS_START });

/**
 *  Action creator for handling https requests to get global covid-19 data using axios.
 * @async
 * @function globaldataAction
 * @returns {Promise} Promise object represents global covid-19 data the data from get https request.
 *
 */

export const globaldataAction = () => async (dispatch) => {
  dispatch(REQUEST_START());
  axios
    .get("https://corona.lmao.ninja/v2/all?yesterday")
    .then((response) => {
      const data = response.data;
      return dispatch({
        type: GET_GLOBAL_STATS_SUCCESS,
        payload: data,
      });
    })
    .catch((error) => {
      const errorMessage = error.message;

      return dispatch({
        type: GET_GLOBAL_STATS_FAILURE,
        payload: errorMessage,
      });
    });
};
