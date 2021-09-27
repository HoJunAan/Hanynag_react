import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Header from "Components/Header";
import Introduce from "Routes/Introduce";
import Online from "Routes/Online";
import EduDetail from "Routes/EduDetail";
import EduRequest from "Routes/EduRequest";
import Login from "Routes/Login";
import Join from "Routes/Join";
import ScrollToTop from "Routes/behavior/ScrollToTop";

import Review from "Routes/EduReview";

const Router = () => (
    <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Switch>
            <Route path="/" exact component={Introduce} />
            <Route path="/online" exact component={Online} />
            <Route path="/online/:id" exact component={EduDetail} />
            <Route path="/edu_request" exact component={EduRequest} />
            <Route path="/login" exact component={Login} />
            <Route path="/join" exact component={Join} />
            <Route path="/review" component={Review} />
            <Redirect from="*" to="/" />
        </Switch>
    </BrowserRouter>
);

export default Router;
