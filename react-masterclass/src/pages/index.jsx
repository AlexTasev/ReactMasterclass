import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import gql from 'graphql-tag.macro';
import Episode from "./episodes/Episode-details";
import Episodes from "./episodes/Episodes";
import Characters from "./characters/Characters";
import Character from "./characters/Character-details";
import Starship from "./starships/Starship"
import ProtectedRoute from "../components/common/ProtectedRoute";


export const AUTHENTICATED_QUERY = gql`
  query IsAuthenticated {
    authenticated @client
  }
`;

const Pages = () => {
  // const { data } = useQuery(AUTHENTICATED_QUERY);

  return (
    <Switch>
      <ProtectedRoute>
        <Route path="/episodes/:episodeId" component={Episode} />
        <Route path="/characters/:characterId" component={Character} />
        <Route path="/episodes" component={Episodes} exact />
        <Route path="/characters" component={Characters} exact />
        <Route path="/starships/:starshipId" component={Starship} />
        <Route path="/" exact component={() => <Redirect to="/episodes" />} />
      </ProtectedRoute>
    </Switch>
  );
};

export default Pages;
