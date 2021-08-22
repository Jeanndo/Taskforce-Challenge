/**
 * Getting action types from :actionTypes/actionTypes file.
 * @constant
 * @type {string}
 */
import * as type from "../actionTypes/actionTypes";
/**
 * Creating initial state to covid-19 data for all continents.
 *
 */
const initialState = {
  fetCovidData: {
    message: null,
    loading: false,
    error: null,
    success: false,
  },
};
/**
 * A switch case based function.
 * @function covidDataReducer
 * @param {Object} state state of type object whicld hold covid-19 data for aall specific continents.
 * @param {*} action paramter used for accessing action types and payload from action creator.
 * @returns {Object} state that stores continents data.
 */
const covidDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_CONTINENT_DATA_START:
      return {
        ...state,
        fetCovidData: {
          message: null,
          loading: true,
          error: null,
          success: false,
        },
      };
    case type.GET_CONTINENT_DATA_SUCCESS:
      return {
        ...state,
        fetCovidData: {
          message: action.payload,
          loading: false,
          error: null,
          success: true,
        },
      };
    case type.GET_CONTINENT_DATA_FAILURE:
      return {
        ...state,
        fetCovidData: {
          message: null,
          loading: false,
          error: action.payload,
          success: false,
        },
      };
    default:
      return state;
  }
};

export default covidDataReducer;
