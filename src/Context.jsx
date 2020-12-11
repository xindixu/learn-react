import React from "react";

export const Context = React.createContext();
export const UserContext = React.createContext();

/**
 *
 * Steps to use context:
 * 1. React.createContext()
 * 2. Put <Context.Provider value={}> as ancestors
 * 3. Choose a way to consume context:
 *
 * Three ways of consume context:
 * 1. MyClass.contextType = Context
 *   - only for class components
 *   - only one context is allowed
 *
 * 2. useContext
 *   - only for functional components
 *
 * 3. Context.Consumer
 *   - can be used in both class component and functional component
 *   - use render props
 *
 */
