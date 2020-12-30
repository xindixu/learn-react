import React, { useLayoutEffect, useReducer, useContext } from "react";
import { bindActionCreators } from "./bindActionCreators";
import { StoreContext } from "./provider";

export const connect = (
  mapStateToProps = (state) => state,
  mapDispatchToProps
) => (WrappedComponent) => (props) => {
  const { getState, dispatch, subscribe } = useContext(StoreContext);
  const stateProps = mapStateToProps(getState());
  let dispatchProps = { dispatch };

  if (typeof mapDispatchToProps === "function") {
    dispatchProps = mapDispatchToProps(dispatch);
  } else {
    dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
  }

  // update component

  // If states are the same as before, useState and useReducer will skip update
  // Thus, we can use this:
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  // const [, forceUpdate] = useState({});
  // and use forceUpdate({});

  // ___(mount) __(useEffect) => what if data changes in the delay
  // ___(mount)__(useLayoutEffect)
  useLayoutEffect(() => {
    const unsubscribe = subscribe(() => {
      forceUpdate();
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return <WrappedComponent {...props} {...stateProps} {...dispatchProps} />;
};
