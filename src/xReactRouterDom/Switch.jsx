import React, { useContext } from "react";
import PropTypes from "prop-types";
import matchPath from "./matchPath";

import { RouterContext } from "./RouterContext";

const Switch = ({ children }) => {
  const context = useContext(RouterContext);

  let match;
  let element;

  React.Children.forEach(children, (child) => {
    if (match == null) {
      element = child;
      match = child.props.path
        ? matchPath(context.location.pathname, child.props)
        : context.match;
    }
  });
  // outer match
  return match ? React.cloneElement(element, { computedMatch: match }) : null;
};

Switch.propTypes = {};

export default Switch;
