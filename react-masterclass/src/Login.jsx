import React from 'react';
import gql from 'graphql-tag';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import LoginComponent from './components/login/Login-component';

const SIGN_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
    }
  }
`;

const Login = () => {
  const client = useApolloClient();

  const [login, { loading, error }] = useMutation(SIGN_IN, {
    onCompleted: ({ signIn: signInData }) => {
      localStorage.setItem('token', signInData.token);
      client.writeData({ data: { authenticated: true } });
    },
  });

  if (loading) return <span>Loading...</span>;
  if (error) return <p>An error occurred</p>;

  return <LoginComponent login={login} />;
};

export default Login;
