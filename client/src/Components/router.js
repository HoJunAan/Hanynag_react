import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Header from "Components/Header";
import Introduce from "Routes/Introduce";
import Online from "Routes/Online";
import EduDetail from "Routes/EduDetail";
import EduRequest from "Routes/EduRequest";

const Router = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={Introduce} />
      <Route path="/online" exact component={Online} />
      <Route path="/online/:id" exact component={EduDetail} />
      <Route path="/edu_request" exact component={EduRequest} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);
export default Router;
