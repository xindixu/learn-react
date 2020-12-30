import React from "react";
import "./App.css";
import ContextPage from "./pages/ContextPage";
import FormPage from "./pages/FormPage";
import FormClassPage from "./pages/FormClassPage";
import FormRCPage from "./pages/FormRCPage";
import ReduxPage from "./pages/ReduxPage";
import ReactReduxPage from "./pages/ReactReduxPage";
import ReactReduxHookPage from "./pages/ReactReduxHookPage";

function App() {
  return (
    <div className="App">
      {/* <ContextPage /> */}
      {/* <FormClassPage /> */}
      {/* <FormRCPage /> */}
      {/* <FormPage /> */}
      {/* <ReactReduxPage /> */}
      <ReactReduxHookPage />
    </div>
  );
}

export default App;
