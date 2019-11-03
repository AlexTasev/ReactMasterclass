import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Episode from "./episodes/Episode-item";
import Episodes from "./episodes/Episodes";
import Characters from "./characters/Characters";
import Character from "./characters/Character-Item";
import PrivateRoute from "../components/common/PrivateRoute";
import gql from "graphql-tag.macro";

export const AUTHENTICATED_QUERY = gql`
  query IsAuthenticated {
    authenticated @client
  }
`;

const Pages = () => {
  return (
    <Switch>
      <PrivateRoute>
        <Route path="/episodes/:episodeId" component={Episode} />
        <Route path="/characters/:characterId" component={Character} />
        <Route path="/episodes" component={Episodes} exact />
        <Route path="/characters" component={Characters} exact />
        <Route
          path="/"
          exact
          component={() => <Redirect to="/episodes" />}
        />
      </PrivateRoute>
    </Switch>
  );
};

export default Pages;
