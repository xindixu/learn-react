// createStore(reducer, applyMiddleware(thunk, logger));

const createStore = (reducer, enhancer) => {
  if (enhancer) {
    // applyMiddleware(thunk, logger)(createStore)(reducer)
    return enhancer(createStore)(reducer);
  }

  let currentState;
  const currentListeners = [];

  const getState = () => {
    return currentState;
  };

  const dispatch = (action) => {
    console.log("run store dispatch");

    currentState = reducer(currentState, action);
    currentListeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => {
    currentListeners.push(listener);
    return () => {
      currentListeners.filter((l) => l !== listener);
    };
  };

  // run once to get initial state
  dispatch({ type: "REDUX/QQQQQQ" });

  return {
    getState,
    dispatch,
    subscribe,
  };
};

export default createStore;
