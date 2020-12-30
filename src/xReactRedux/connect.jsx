import React from "react";
import { bindActionCreators } from "./bindActionCreators";
import { useStore, useSubscribe } from "./hooks";

export const connect = (
  mapStateToProps = (state) => state,
  mapDispatchToProps
) => (WrappedComponent) => (props) => {
  const { getState, dispatch } = useStore();
  useSubscribe();

  const stateProps = mapStateToProps(getState());
  let dispatchProps = { dispatch };

  if (typeof mapDispatchToProps === "function") {
    dispatchProps = mapDispatchToProps(dispatch);
  } else {
    dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
  }

  return <WrappedComponent {...props} {...stateProps} {...dispatchProps} />;
};
