import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
// import { withRouter } from "../k-react-router-dom";

class HomePage extends Component {
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    // return <Redirect to="/welcome" />;
    return (
      <div>
        <h3>HomePage</h3>
      </div>
    );
  }
}

export default HomePage;
