import React, { useState } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";

import client from "./client";
import "./App.css";
import Login from "./pages/login/Login";
import Episodes from "./pages/episodes/Episodes";
import Characters from "./pages/characters/Characters";
import Starships from "./pages/starships/Starships";
import Navbar from "./components/common/Navbar";

const App = () => {
  const isLoggedIn = !!localStorage.getItem("token");
  console.log(isLoggedIn);

  return (
    <ApolloProvider client={client}>
      <Router>
        {isLoggedIn && <Navbar />}
        <Switch>
          <Route exact path="/">
            {isLoggedIn ? (
              <Redirect to="/episodes" />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          {isLoggedIn ? (
            <>
              <Route path="/episodes" component={Episodes} />
              <Route path="/characters" component={Characters} />
              <Route path="/starships" component={Starships} />
            </>
          ) : (
            <Route path="/login" component={Login} />
          )}
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
