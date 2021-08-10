import React, { useState, useContext } from "react";

const context = React.createContext();

const ContextProvider = ({ children }) => {
  const [clickType, clickTypeUpdate] = useState({});
  return <context.Provider value={{ clickType }}>{children}</context.Provider>;
};

export default ContextProvider;
