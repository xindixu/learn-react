// import thunk from "redux-thunk";
// import logger from "redux-logger";
// import { createStore, applyMiddleware, combineReducers } from "redux";
import { createStore, applyMiddleware, combineReducers } from "../xRedux";
import logger from "./logger";
import thunk from "./thunk";
import promise from "./promise";

export const counterReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case "ADD":
      return state + payload;
    case "MINUS":
      return state - payload;
    default:
      return state;
  }
};

export const todoReducer = (state = ["eat"], { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return [...state, payload];
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({ counter: counterReducer, todo: todoReducer }),
  applyMiddleware(promise, thunk, logger)
);

export default store;
