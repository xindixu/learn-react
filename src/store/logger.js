const logger = ({ getState }) => {
  // compose(...middlewaresChain)(store.dispatch);
  // fns.reduce((a, b) => (arg) => a(b(arg)));
  // store.dispatch = (action) => {}
  return (next) => (action) => {
    console.log("logger's next - dispatch", next);

    console.log("-----------------");
    console.log("prev state", getState());
    console.log("action", action);

    // next - accumulator
    const returnValue = next(action);
    console.log("next state", getState());
    console.log("-----------------");

    return returnValue;
  };
};

export default logger;
