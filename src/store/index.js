import thunk from "redux-thunk";
import logger from "redux-logger";
// import { createStore, applyMiddleware } from "redux";
import { createStore, applyMiddleware } from "../xredux";

export const reducer = (state = 0, { type, payload }) => {
  switch (type) {
    case "ADD":
      return state + payload;
    case "MINUS":
      return state - payload;
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
