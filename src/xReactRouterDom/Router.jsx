import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { RouterContext } from "./RouterContext";

function computeRootMatch(pathname) {
  return { path: "/", url: "/", params: {}, isExact: pathname === "/" };
}

const Router = ({ children, history }) => {
  const [location, setLocation] = useState(history.location);

  useEffect(() => {
    const unlisten = history.listen(({ location }) => setLocation(location));
    return () => {
      unlisten();
    };
  }, []);

  return (
    <RouterContext.Provider
      value={{ history, location, match: computeRootMatch(location.pathname) }}
    >
      {children}
    </RouterContext.Provider>
  );
};

Router.propTypes = {
  children: PropTypes.any.isRequired,
  history: PropTypes.object.isRequired,
};

export default Router;
