import React, { useReducer } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./App.css";
import ContextPage from "./pages/ContextPage";
import FormPage from "./pages/FormPage";
import FormClassPage from "./pages/FormClassPage";
import FormRCPage from "./pages/FormRCPage";
import ReduxPage from "./pages/ReduxPage";
import ReactReduxPage from "./pages/ReactReduxPage";
import ReactReduxHookPage from "./pages/ReactReduxHookPage";
import HooksPage from "./pages/HooksPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

import _404Page from "./pages/_404Page";

function App() {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  return (
    <div className="App">
      <Router>
        <Link to="/">Home page</Link>
        <Link to="/product/123">Product 123</Link>
        <Link to="/yay">Yay page</Link>

        <button onClick={forceUpdate} type="button">
          Update
        </button>
        {/* match from top to bottom and must match */}
        <Switch>
          <Route
            exact
            path="/"
            // 1. priority: children > component > render
            // 2. children: will render even if route is not matched
            //    However, with <Switch />, will not render when not matched
            //    component, render: will render only if route is matched
            // 3. children, render: function
            //    component: component
            // children={() => <div>Children page</div>}
            component={HomePage}
            // ! This will trigger mount/unmount when rerenders.
            // component={() => <HomePage />}
            render={() => <div>Render page</div>}
          />
          <Route path="/product/:id" component={ProductPage} />
          {/* without `path` - default match */}
          <Route component={_404Page} />
        </Switch>
        {/* <ContextPage /> */}
        {/* <FormClassPage /> */}
        {/* <FormRCPage /> */}
        {/* <FormPage /> */}
        {/* <ReactReduxPage /> */}
        {/* <ReactReduxHookPage /> */}
        {/* <HooksPage /> */}
      </Router>
    </div>
  );
}

export default App;
