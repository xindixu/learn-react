import React, { useReducer, useLayoutEffect, useEffect } from "react";
import { counterReducer } from "../store";

const HooksPage = () => {
  // Use it when there's complicated logic for updating states
  const [state, dispatch] = useReducer(counterReducer, "0", (init) => init - 0);

  useEffect(() => {
    console.log("useEffect component did mount");
    return () => {
      console.log("component will unmount");
    };
  }, []);

  // run with a bit delay after render (DOM)
  useEffect(() => {
    console.log("component did update");
  }, [state]);

  // run without delay after render (DOM)
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  });

  return (
    <div>
      HooksPage
      <h1>{state}</h1>
      <button
        type="button"
        onClick={() => dispatch({ type: "ADD", payload: 1 })}
      >
        ADD
      </button>
    </div>
  );
};

export default HooksPage;
