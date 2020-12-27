export const createStore = (reducer) => {
  // run once to get initial state
  let currentState = reducer(undefined, {});
  const currentListeners = [];

  const getState = () => {
    return currentState;
  };
  const dispatch = (action) => {
    currentState = reducer(currentState, action);
    currentListeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => {
    currentListeners.push(listener);
  };
  return {
    getState,
    dispatch,
    subscribe,
  };
};
