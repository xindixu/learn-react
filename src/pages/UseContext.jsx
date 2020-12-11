import React, { useContext } from "react";
import { Context, UserContext } from "../Context";

const UseContext = (props) => {
  const { color } = useContext(Context);
  const { name } = useContext(UserContext);
  return (
    <div>
      <h3>Use Context, color: {color}</h3>
      <h3>Use Context, name: {name}</h3>
    </div>
  );
};

UseContext.propTypes = {};

export default UseContext;
