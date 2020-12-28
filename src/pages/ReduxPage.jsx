import React, { Component } from "react";
import PropTypes from "prop-types";
import store from "../store";

class ReduxPage extends Component {
  static propTypes = {};

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
        <button type="button" onClick={this.minus}>
          MINUS
        </button>
      </div>
    );
  }
}

export default ReduxPage;
