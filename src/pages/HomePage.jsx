import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { withRouter } from "../xReactRouterDom";

class HomePage extends Component {
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log(this.props);
    // return <Redirect to="/product/54321" />;
    return (
      <div>
        <h1>HomePage</h1>
      </div>
    );
  }
}

export default withRouter(HomePage);
