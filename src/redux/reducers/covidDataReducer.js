import * as type from "../actionTypes/actionTypes";

const  initialState = {
  fetCovidData: {
    message: null,
    loading: false,
    error: null,
    success: false,
  },
};

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
