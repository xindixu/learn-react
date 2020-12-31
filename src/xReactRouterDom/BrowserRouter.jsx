import React, { useRef } from "react";
import PropTypes from "prop-types";
import { createBrowserHistory } from "history";
import Router from "./Router";

const BrowserRouter = ({ children }) => {
  const history = useRef(createBrowserHistory());
  return <Router history={history.current}>{children}</Router>;
};

BrowserRouter.propTypes = {
  children: PropTypes.any.isRequired,
};

export default BrowserRouter;
