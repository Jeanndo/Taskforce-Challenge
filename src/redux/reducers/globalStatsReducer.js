/**
 * Getting action types from :actionTypes/actionTypes file.
 * @constant
 * @type {string}
 */

import * as type from "../actionTypes/actionTypes";

/**
 * Creating initial state to save global covid-19 data
 *
 */
const initialState = {
  globalData: {
    message: null,
    loading: false,
    error: null,
    success: false,
  },
};

/**
 * A switch case based function.
 * @function globalDataReducer
 * @param {Object} state state of type object whicld hold global covid-19 data.
 * @param {*} action paramter used for accessing action types and payload from action creator.
 * @returns {Object} state that stores global covid-19 data.
 */

const globalDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_GLOBAL_STATS_START:
      return {
        ...state,
        globalData: {
          message: null,
          loading: true,
          error: null,
          success: false,
        },
      };
    case type.GET_GLOBAL_STATS_SUCCESS:
      return {
        ...state,
        globalData: {
          message: action.payload,
          loading: false,
          error: null,
          success: true,
        },
      };
    case type.GET_GLOBAL_STATS_FAILURE:
      return {
        ...state,
        globalData: {
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

export default globalDataReducer;
