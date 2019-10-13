import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import './App.css';

import Login from './pages/login/Login';
import Episodes from './pages/episodes/Episodes';
import Characters from './pages/characters/Characters';
import Starships from './pages/starships/Starships';
import Navbar from './components/common/Navbar';

const App = () => {
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
        <Navbar/>
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
          component={Starships}
        />
      </Switch>
    </Router>
  );
}

export default App;
