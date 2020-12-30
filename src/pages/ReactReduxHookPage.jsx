import React, { useCallback } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useSelector, useDispatch } from "../xReactRedux";

const ReactReduxHookPage = () => {
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

export default ReactReduxHookPage;
