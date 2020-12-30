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

  addTodo = () => {
    store.dispatch({ type: "ADD_TODO", payload: "yay" });
  };

  asycAdd = () => {
    store.dispatch((dispatch, getState) => {
      // print out prevState, since we haven't run dispatch / updated the state yet
      // console.log("state", getState());
      setTimeout(() => {
        dispatch({ type: "ADD", payload: 100 });
        // print out current state, since we've run dispatch / updated the state yet
        // console.log("state", getState());
      }, 1000);
    });
  };

  minus = () => {
    store.dispatch({ type: "MINUS", payload: 100 });
  };

  promiseMinus = () => {
    store.dispatch(
      Promise.resolve({
        type: "MINUS",
        payload: 50,
      })
    );
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <div>{store.getState().counter}</div>
        <button type="button" onClick={this.add}>
          ADD
        </button>
        <button type="button" onClick={this.asycAdd}>
          ASYC ADD
        </button>
        <button type="button" onClick={this.minus}>
          MINUS
        </button>
        <button type="button" onClick={this.promiseMinus}>
          PROMISE MINUS
        </button>

        <h1>Todos</h1>
        <div>
          <ul>
            {store.getState().todo.map((todo) => (
              <li>{todo}</li>
            ))}
          </ul>
        </div>
        <button type="button" onClick={this.addTodo}>
          ADD
        </button>
      </div>
    );
  }
}

export default ReduxPage;
