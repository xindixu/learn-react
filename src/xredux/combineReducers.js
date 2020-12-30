const combineReducers = (reducers) => {
  return (state = {}, action) => {
    const nextState = {};
    let hasChanged = false;

    Object.keys(reducers).forEach((key) => {
      const reducer = reducers[key];
      nextState[key] = reducer(state[key], action);
      hasChanged = hasChanged || nextState[key] !== state[key];
    });

    // {a: 1, b: 1} vs {a: 1}
    hasChanged =
      hasChanged || Object.keys(state).length !== Object.keys(nextState).length;

    return hasChanged ? nextState : state;
  };
};

export default combineReducers;
