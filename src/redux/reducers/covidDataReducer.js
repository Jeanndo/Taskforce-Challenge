import * as types from "../actionTypes/actionTypes";

const initialSTate = {
  fetCovidData: {
    message: null,
    loading: false,
    error: null,
    success: false,
  },
};

const covidDataReducer = (state = initialSTate, action) => {
  switch (action.types) {
    case types.GET_DATA_START:
      return {
        ...state,
        fetCovidData: {
          message: null,
          loading: true,
          error: null,
          success: false,
        },
      };
    case types.GET_DATA_SUCCESS:
      return {
        ...state,
        fetCovidData: {
          message: action.payload,
          loading: false,
          error: null,
          success: true,
        },
      };
    case types.GET_DATA_FAILURE:
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
