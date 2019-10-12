import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import './App.css';

import Login from './pages/login/Login';
import Episodes from './pages/episodes/Episodes';
import Characters from './pages/characters/Characters'

const App = (props) => {
  let isLoggedIn = false;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isLoggedIn ? <Redirect to="/episodes" /> : <Redirect to="/login" />}
        </Route>
        <Route
          path="/login"
          component={Login}
        />
        <Route
          path="/episodes"
          component={Episodes}
        />
        <Route
          path="/characters"
          component={Characters}
        />
        <Route
          path="/starships"
          component={Characters}
        />
      </Switch>
    </Router>
  );
}

export default App;
