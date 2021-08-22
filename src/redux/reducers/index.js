/**
 * Combining reducers for easy access in our redux store.
 */

import { combineReducers } from "redux";
import covidDataReducer from "./covidDataReducer";
import globalDataReducer from "./globalStatsReducer";
import historicalReducer from "./HistoricalReducer";
import countryDataReducer from "./countryDataReducer";

export default combineReducers({
  covidDataReducer,
  globalDataReducer,
  historicalReducer,
  countryDataReducer,
});
