import React, { Component } from "react";
import { Context, UserContext } from "../Context";

const Theme = ({ color }) => <div>Consumer theme: {color}</div>;
const User = ({ name }) => <div>User name: {name}</div>;

class ConsumerPage extends Component {
  render() {
    return (
      <>
        <h3>Consumer Page</h3>
        <Context.Consumer>{(props) => <Theme {...props} />}</Context.Consumer>
        <UserContext.Consumer>
          {/* {(user) => <div>User name: {user.name}</div>} */}
          {(props) => <User {...props} />}
        </UserContext.Consumer>
      </>
    );
  }
}

export default ConsumerPage;
