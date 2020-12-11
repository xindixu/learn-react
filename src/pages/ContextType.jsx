import React, { Component } from "react";
import { Context, UserContext } from "../Context";

class ContextType extends Component {
  render() {
    const { color, name } = this.context;

    return (
      <div>
        <h3>Context Type, color: {color}</h3>
        <h3>Context Type, name: {name}</h3>
      </div>
    );
  }
}
// can only use one contextType
ContextType.contextType = Context;
ContextType.contextType = UserContext;

export default ContextType;
