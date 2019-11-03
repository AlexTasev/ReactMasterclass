import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Redirect } from "react-router-dom";
import gql from "graphql-tag.macro";
import Login from "../../pages/login/Login";
export const AUTHENTICATED_QUERY = gql`
  query IsAuthenticated {
    authenticated @client
  }
`;

const PrivateRoute = props => {
  const { data } = useQuery(AUTHENTICATED_QUERY);

  return data.authenticated ? (
    props.children
  ) : (
    <div>
      <Login />
      <Redirect to={"/login"} />
    </div>
  );
};

export default PrivateRoute;
