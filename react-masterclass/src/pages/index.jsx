import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import EpizodeItem from "./episodes/Episode-item";
import Episodes from "./episodes/Episodes";
import Characters from "./characters/Characters";
import Character from "./characters/Character-Item";
import ProtectedRoute from "../components/common/ProtectedRoute";
import gql from "graphql-tag.macro";

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
        <Route path="/episodes/:episodeId" component={EpizodeItem} />
        <Route path="/characters/:characterId" component={Character} />
        <Route path="/episodes" component={Episodes} exact />
        <Route path="/characters" component={Characters} exact />
        <Route path="/" exact component={() => <Redirect to="/episodes" />} />
      </ProtectedRoute>
    </Switch>
  );
};

export default Pages;
