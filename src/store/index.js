import { createStore } from "../xredux";

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

const store = createStore(reducer);

export default store;
