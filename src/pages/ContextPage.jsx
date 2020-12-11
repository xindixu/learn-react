import React, { useState } from "react";
import { Context, UserContext } from "../Context";
import ContextType from "./ContextType";
import UseContext from "./UseContext";
import ConsumerPage from "./ConsumerPage";

const ContextPage = () => {
  const [theme, setTheme] = useState({ color: "red" });
  const [user, setUser] = useState({ name: "xindi" });
  return (
    <div>
      <button
        type="button"
        onClick={() =>
          setTheme((t) => ({ color: t.color === "red" ? "green" : "red" }))
        }
      >
        Change color
      </button>
      <Context.Provider value={theme}>
        <UserContext.Provider value={user}>
          <ContextType />
          <UseContext />
          <ConsumerPage />
        </UserContext.Provider>
      </Context.Provider>
    </div>
  );
};

export default ContextPage;
