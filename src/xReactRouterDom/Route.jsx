import React, { useContext } from "react";
import PropTypes from "prop-types";
import { RouterContext } from "./RouterContext";
import matchPath from "./matchPath";

const Route = (props) => {
  // computedMatch comes from <Switch />
  // <Switch /> will check match from top to bottom and only render one thing at a time
  const { component, children, render, path, computedMatch } = props;
  const context = useContext(RouterContext);

  const { location, history } = context;
  const match =
    computedMatch ||
    (path ? matchPath(location.pathname, props) : context.match);

  const routeProps = {
    ...context,
    match,
  };

  return (
    // inner match
    // Create an inner context and pass down latest `match` value
    <RouterContext.Provider value={routeProps}>
      {match
        ? children
          ? typeof children === "function"
            ? children(routeProps)
            : children
          : component
          ? React.createElement(component, routeProps)
          : render
          ? render(routeProps)
          : null
        : typeof children === "function"
        ? children(routeProps)
        : null}
    </RouterContext.Provider>
  );

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
