import * as type from "../actionTypes/actionTypes";

const initialState = {
  globalData: {
    message: null,
    loading: false,
    error: null,
    success: false,
  },
};

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
