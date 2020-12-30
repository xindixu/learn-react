import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

const ReactReduxHookPage = (props) => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const add = useCallback(() => {
    dispatch({ type: "ADD", payload: 1 });
  }, []);

  return (
    <div>
      ReactReduxHookPage
      <h1>{counter}</h1>
      <button type="button" onClick={add}>
        ADD
      </button>
    </div>
  );
};

ReactReduxHookPage.propTypes = {};

export default ReactReduxHookPage;
