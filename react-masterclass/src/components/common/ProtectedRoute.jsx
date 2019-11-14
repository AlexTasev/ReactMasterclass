import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Route, Redirect } from 'react-router-dom';
import gql from 'graphql-tag.macro';

export const AUTHENTICATED_QUERY = gql`
  query IsAuthenticated {
    authenticated @client
  }
`;

const ProtectedRoute = props => {
  const { data } = useQuery(AUTHENTICATED_QUERY);

  return data.authenticated ? (
    props.children
  ) : (
    <Route exact component={() => <Redirect to="/" />} path="/login" />
  );
};

export default ProtectedRoute;
