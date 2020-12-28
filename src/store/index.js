// import thunk from "redux-thunk";
// import logger from "redux-logger";
// import { createStore, applyMiddleware } from "redux";
import { createStore, applyMiddleware } from "../xredux";
import logger from "./logger";
import thunk from "./thunk";
import promise from "./promise";

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

const store = createStore(reducer, applyMiddleware(promise, thunk, logger));

export default store;
