import React from "react";
import GlobalStyles from "Components/GlobalSyles";
import Router from "Components/router";
import Footer from "Components/Footer";
import ContextProvider from "context";
import "CSS/style.css";

function App() {
  return (
    <ContextProvider>
      <GlobalStyles />
      <Router />
      <Footer />
    </ContextProvider>
  );
}

export default App;
