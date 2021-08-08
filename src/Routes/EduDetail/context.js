import React, { useState, useContext, useRef, createContext } from "react";

export const EduContext = createContext();
const ContextProvider = ({ children }) => {
  const tabRef = useRef([]);

  return (
    <EduContext.Provider value={{ tabRef }}>{children}</EduContext.Provider>
  );
};

export default ContextProvider;
