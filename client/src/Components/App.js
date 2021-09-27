import React from "react";
import GlobalStyles from "Components/GlobalSyles";
import Router from "Components/router";
import Footer from "Components/Footer";
import "CSS/style.css";
function App() {
    return (
        <>
            <GlobalStyles />
            <Router />
            <Footer />
        </>
    );
}

export default App;
