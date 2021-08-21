import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reduxPromise from "redux-promise";
import reducers from "./redux/reducers";

/**
 * @function root Global state store for our app.
 * @param {*} children means that whatever passed in provide  tag will globally access state store.
 * @param {Object} initialState to save data globally in state.
 * @returns provider with store props.
 */ 
const root = ({ children, initialState = {} }) => {
  const middleware = applyMiddleware(thunk, reduxPromise);
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(middleware)
  );
  return <Provider store={store}>{children}</Provider>;
};

export default root;
