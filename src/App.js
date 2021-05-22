import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Admin from "./componnent/Admin/Admin";
import Checkout from "./componnent/Checkout/Checkout";
import Header from "./componnent/Header/Header";
import Home from "./componnent/Home/Home";
import Login from "./componnent/Login/Login";
import Order from "./componnent/Order/Order";
import PrivateRoute from "./componnent/PrivateRoute/PrivateRoute";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/checkout/:foodId">
            <Checkout/>
          </PrivateRoute>
          <PrivateRoute path="/order">
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin/>
          </PrivateRoute>
          <Route exact to="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
