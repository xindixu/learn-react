import React, { useContext } from "react";
import PropTypes from "prop-types";
import { RouterContext } from "./RouterContext";

const Link = ({ to, children, ...rest }) => {
  const { history } = useContext(RouterContext);
  const handleOnClick = (e) => {
    e.preventDefault();
    history.push(to);
  };

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a {...rest} onClick={handleOnClick} href="#">
      {children}
    </a>
  );
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
