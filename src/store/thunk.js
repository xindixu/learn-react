// middleware(middlewareApi)
const thunk = ({ getState, dispatch }) => {
  return (next) => (action) => {
    // console.log("thunk's next - logger", next);
    // dispatch is a function: call action once
    if (typeof action === "function") {
      return action(dispatch, getState);
    }
    // dispatch is an object: noop

    const returnValue = next(action);
    return returnValue;
  };
};

export default thunk;
