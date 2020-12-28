import isPromise from "is-promise";

const promise = ({ dispatch }) => {
  return (next) => (action) => {
    console.log("promise's next - thunk", next);

    return isPromise(action) ? action.then(dispatch) : next(action);
  };
};

export default promise;
