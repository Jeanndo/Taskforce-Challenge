/**
 * Getting action types from :actionTypes/actionTypes file.
 * @constant
 * @type {string}
 */
import * as type from "../actionTypes/actionTypes";
/**
 * Creating initial state to save historical data for country
 *
 */
const initialState = {
  historicalData: {
    message: null,
    loading: false,
    error: null,
    success: false,
  },
};
/**
 * A switch case based function.
 * @function historicalReducer
 * @param {Object} state state of type object whicld hold historical covid-19 data for a country.
 * @param {*} action paramter used for accessing action types and payload from action creator.
 * @returns {Object} state that stores historical data.
 */
const historicalReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_COUNTRY_HIST__DATA_START:
      return {
        ...state,
        historicalData: {
          message: null,
          loading: true,
          error: null,
          success: false,
        },
      };
    case type.GET_COUNTRY_HIST__DATA_SUCCESS:
      return {
        ...state,
        historicalData: {
          message: action.payload,
          loading: false,
          error: null,
          success: true,
        },
      };
    case type.GET_COUNTRY_HIST__DATA_FAILURE:
      return {
        ...state,
        historicalData: {
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

export default historicalReducer;
