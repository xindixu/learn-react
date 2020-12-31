import React, { useContext } from "react";
import PropTypes from "prop-types";
import { RouterContext } from "./RouterContext";

const Route = ({ path, component, children, render }) => {
  const { location, history } = useContext(RouterContext);

  const match = location.pathname === path;

  const props = {
    location,
    history,
    match,
  };
  // match: children | component | render
  if (match) {
    if (children) {
      return typeof children === "function" ? children(props) : children;
    }
    if (component) {
      return React.createElement(component, props);
    }
    if (render) {
      return render(props);
    }
    return null;
  }

  // not match: children(function) | null
  // <Route children={() => {}} /> -> typeof children === "function"
  // <Route>{children}</Route> -> typeof children === "object" (jsx syntax)
  return typeof children === "function" ? children(props) : null;
};

Route.propTypes = {};

export default Route;
