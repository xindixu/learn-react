import React, { Component } from "react";
import store from "../store";

class ReduxPage extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  add = () => {
    store.dispatch({ type: "ADD", payload: 100 });
  };

  asycAdd = () => {
    store.dispatch((dispatch, getState) => {
      // print out prevState, since we haven't run dispatch / updated the state yet
      console.log("state", getState());
      setTimeout(() => {
        dispatch({ type: "ADD", payload: 100 });
        // print out current state, since we've run dispatch / updated the state yet
        console.log("state", getState());
      }, 1000);
    });
  };

  minus = () => {
    store.dispatch({ type: "MINUS", payload: 100 });
  };

  render() {
    return (
      <div>
        Redux Page
        <div>{store.getState()}</div>
        <button type="button" onClick={this.add}>
          ADD
        </button>
        <button type="button" onClick={this.asycAdd}>
          ASYC ADD
        </button>
        <button type="button" onClick={this.minus}>
          MINUS
        </button>
      </div>
    );
  }
}

export default ReduxPage;
