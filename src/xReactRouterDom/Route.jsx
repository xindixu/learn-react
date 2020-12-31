import React, { useContext } from "react";
import PropTypes from "prop-types";
import { RouterContext } from "./RouterContext";
import matchPath from "./matchPath";

const Route = (props) => {
  const { component, children, render, path } = props;
  const context = useContext(RouterContext);

  const { location, history } = context;
  const match = path ? matchPath(location.pathname, props) : context.match;

  const routeProps = {
    location,
    history,
    match,
  };
  // match: children | component | render
  if (match) {
    if (children) {
      return typeof children === "function" ? children(routeProps) : children;
    }
    if (component) {
      return React.createElement(component, routeProps);
    }
    if (render) {
      return render(routeProps);
    }
    return null;
  }

  // not match: children(function) | null
  // <Route children={() => {}} /> -> typeof children === "function"
  // <Route>{children}</Route> -> typeof children === "object" (jsx syntax)
  return typeof children === "function" ? children(routeProps) : null;
};

Route.propTypes = {
  component: PropTypes.node,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  render: PropTypes.func,
  path: PropTypes.string,
};

export default Route;
