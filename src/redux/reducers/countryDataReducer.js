/**
 * Getting action types from :actionTypes/actionTypes file.
 * @constant
 * @type {string}
 */

import * as type from "../actionTypes/actionTypes";
/**
 * Creating initial state to save country data
 *
 */
const initialState = {
  countryData: {
    message: null,
    loading: false,
    error: null,
    success: false,
  },
};
/**
 * A switch case based function.
 * @function countryDataReducer
 * @param {Object} state state of type object whicld hold covid-19 data for a specific country.
 * @param {*} action paramter used for accessing action types and payload from action creator.
 * @returns {Object} state that stores country data.
 */
const countryDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_COUNTRY_DATA_START:
      return {
        ...state,
        countryData: {
          message: null,
          loading: true,
          error: null,
          success: false,
        },
      };
    case type.GET_COUNTRY_DATA_SUCCESS:
      return {
        ...state,
        countryData: {
          message: action.payload,
          loading: false,
          error: null,
          success: true,
        },
      };
    case type.GET_COUNTRY_DATA_FAILURE:
      return {
        ...state,
        countryData: {
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
export default countryDataReducer;
