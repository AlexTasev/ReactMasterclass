import React, { useState } from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";
import "./App.css";

import Login from "./pages/login/Login";
import Episodes from "./pages/episodes/Episodes";
import Characters from "./pages/characters/Characters";
import Starships from "./pages/starships/Starships";
import Navbar from "./components/common/Navbar";

const App = () => {
  const [user, setUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);

  const signInUser = userData => {
    setUser(userData);
    setLoggedIn(true);
  };

  return (
    <Router>
      {isLoggedIn && <Navbar />}
      <Switch>
        <Route exact path="/">
          {isLoggedIn ? <Redirect to="/episodes" /> : <Redirect to="/login" />}
        </Route>
        {isLoggedIn ? (
          <>
            <Route path="/episodes" component={Episodes} />
            <Route path="/characters" component={Characters} />
            <Route path="/starships" component={Starships} />
          </>
        ) : (
          <>
            <Redirect to="/login" />
            <Route
              path="/login"
              render={() => <Login signInUser={signInUser} />}
            />
          </>
        )}
      </Switch>
    </Router>
  );
};

export default App;
