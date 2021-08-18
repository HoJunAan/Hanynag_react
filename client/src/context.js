import React, { useState } from "react";

const context = React.createContext();

const ContextProvider = ({ children }) => {
  const [clickType] = useState({});
  return <context.Provider value={{ clickType }}>{children}</context.Provider>;
};

export default ContextProvider;
