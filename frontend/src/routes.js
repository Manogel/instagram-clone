import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

// import { Container } from './styles';

import Feed from "./pages/Feed";
import New from "./pages/New";
import Header from "./Components/Header";

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Feed} />
        <Route exact path="/new" component={New} />
      </Switch>
    </BrowserRouter>
  );
}
