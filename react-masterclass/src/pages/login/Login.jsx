import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { Box, Flex } from 'rebass';
import Logo from '../../components/common/Logo';
import ButtonSW from '../../components/common/ButtonSW';
import InputSW from '../../components/common/InputSW';

const SIGN_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
    }
  }
`;

const Login = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  let credentialsError = false;

  const client = useApolloClient();

  const [login, { loading, error }] = useMutation(SIGN_IN, {
    onCompleted: ({ signIn: signInData }) => {
      localStorage.setItem('token', signInData.token);
      client.writeData({ data: { authenticated: true } });
    },
  });

  if (loading) return <span>Loading...</span>;
  if (error) return <p>An error occurred</p>;

  const handleSubmit = event => {
    event.preventDefault();

    if (userEmail && userPassword) {
      login({ variables: { email: userEmail, password: userPassword } });
    } else {
      credentialsError = true;
    }
  };

  return (
    <Box backgroundColor="black" width="50%" height="50%" mx="auto" my={5}>
      <Flex fontSize={[4, 5, 6, 7, 8]}>
        <Logo fontSize={[8, 9, 10]} mx="auto" />
      </Flex>
      {credentialsError && <div className="error">Invalid credentials!</div>}
      <Box
        as="form"
        onSubmit={handleSubmit}
        mx="auto"
        my={5}
        sx={theme => ({
          backgroundColor: theme.cardBackground,
          borderRadius: 20,
          width: '80%',
        })}
      >
        {' '}
        <Flex
          flexDirection="column"
          justifyContent="spaceBetween"
          alignItems="center"
        >
          <InputSW
            type="email"
            name="email"
            value={userEmail}
            placeholder="email"
            onChange={e => setUserEmail(e.target.value)}
          />
          <InputSW
            type="password"
            name="password"
            value={userPassword}
            placeholder="password"
            onChange={e => setUserPassword(e.target.value)}
          />
          <Box alignItems="right" px="auto">
            <ButtonSW type="submit">Login</ButtonSW>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Login;
