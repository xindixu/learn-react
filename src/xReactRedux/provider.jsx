import React from "react";

/*
 * Context:
 * 1. createContext
 * 2. pass value with `Provider`
 * 3. use value with `useContext` (connect)
 *    3.1 contextType - class
 *    3.2 useContext - function
 *    3.3 Consumer - any
 */

export const StoreContext = React.createContext();

export const Provider = ({ store, children }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
