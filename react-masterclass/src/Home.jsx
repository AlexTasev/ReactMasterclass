import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag.macro';
import { Box } from 'rebass';

import Pages from './pages/index';
import Login from './Login';
import Navbar from './components/common/Navbar';

export const AUTHENTICATED_QUERY = gql`
  query IsAuthenticated {
    authenticated @client
  }
`;

const Home = () => {
  const { data } = useQuery(AUTHENTICATED_QUERY);

  return (
    <Box
      width="100%"
      height="100%"
      m={0}
      sx={theme => ({ backgroundColor: theme.background })}
    >
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
