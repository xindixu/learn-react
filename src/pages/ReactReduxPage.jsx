import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

@connect(
  // mapStateToProps
  (state) => ({ counter: state.counter, todo: state.todo }),
  // mapDispatchToProps object | fn
  // object, no more dispatch
  // {
  //   add: () => ({ type: "ADD", payload: 100 }),
  // }

  (dispatch) => {
    // const add = () => dispatch({ type: "ADD", payload: 100 });

    // or use bindActionCreators
    let creators = {
      add: () => ({ type: "ADD", payload: 100 }),
      minus: () => ({ type: "MINUS", payload: 50 }),
    };

    creators = bindActionCreators(creators, dispatch);
    return { dispatch, ...creators };
  }
)
class ReduxPage extends Component {
  addTodo = () => {
    this.props.dispatch({ type: "ADD_TODO", payload: "yay" });
  };

  asycAdd = () => {
    this.props.dispatch((dispatch, getState) => {
      // print out prevState, since we haven't run dispatch / updated the state yet
      // console.log("state", getState());
      setTimeout(() => {
        dispatch({ type: "ADD", payload: 100 });
        // print out current state, since we've run dispatch / updated the state yet
        // console.log("state", getState());
      }, 1000);
    });
  };

  promiseMinus = () => {
    this.props.dispatch(
      Promise.resolve({
        type: "MINUS",
        payload: 50,
      })
    );
  };

  render() {
    const { counter, todo, add, minus } = this.props;
    return (
      <div>
        <h1>Counter</h1>
        <div>{counter}</div>
        <button type="button" onClick={add}>
          ADD
        </button>
        <button type="button" onClick={this.asycAdd}>
          ASYC ADD
        </button>
        <button type="button" onClick={minus}>
          MINUS
        </button>
        <button type="button" onClick={this.promiseMinus}>
          PROMISE MINUS
        </button>

        <h1>Todos</h1>
        <div>
          <ul>
            {todo.map((t, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index}>{t}</li>
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
