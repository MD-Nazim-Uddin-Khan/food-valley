import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./componnent/Home/Home";
import Order from "./componnent/Order/Order";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/order">
          <Order/>
        </Route>
        <Route path="/dashboard">
          
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
