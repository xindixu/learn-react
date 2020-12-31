import React from "react";
import { RouterContext } from "./RouterContext";

const withRouter = (WrappedComponent) => (props) => (
  <RouterContext.Consumer>
    {(context) => <WrappedComponent {...props} {...context} />}
  </RouterContext.Consumer>
);

export default withRouter;
