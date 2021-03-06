import { compose } from "./compose";

// applyMiddleware(...middlewares)(createStore)(reducer);
const applyMiddleware = (...middlewares) => {
  // enhancer(createStore)(reducer);
  return (createStore) => (reducer) => {
    // store = { getState, dispatch, subscribe };
    const store = createStore(reducer);
    let dispatch = () => {};

    // TODO: enhance dispatch
    const middlewareApi = {
      // read
      getState: store.getState,
      // manipulation: should run only once
      dispatch: (action, ...args) => {
        console.log("run middlewareApi dispatch");
        return dispatch(action, ...args);
      },
    };

    // call every middleware with `middlewareApi` and each middleware becomes a function
    const middlewaresChain = middlewares.map((middleware) =>
      middleware(middlewareApi)
    );

    // run all middlewares when calling dispatch
    // store.dispatch to update state
    dispatch = compose(...middlewaresChain)(store.dispatch);

    return {
      ...store,
      dispatch,
    };
  };
};

export default applyMiddleware;
