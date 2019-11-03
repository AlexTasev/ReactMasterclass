import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag.macro";
import { Box } from "rebass";

import Pages from "./pages/index";
import Login from "./pages/login/Login";
import Navbar from "./components/common/Navbar";

export const AUTHENTICATED_QUERY = gql`
  query IsAuthenticated {
    authenticated @client
  }
`;

const Home = () => {
  const { data } = useQuery(AUTHENTICATED_QUERY);
  return (
    <Box width={[400, 600, 1000]} mx="auto">
      {data.authenticated ? (
        <>
          <Navbar />
          <Pages />
        </>
      ) : (
        <Login />
      )}
    </Box>
  );
};

export default Home;
