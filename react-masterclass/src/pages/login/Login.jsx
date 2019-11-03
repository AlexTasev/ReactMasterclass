import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import gql from "graphql-tag";
import { useApolloClient, useMutation } from "@apollo/react-hooks";
import Logo from "../../components/common/Logo";

const SIGN_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
    }
  }
`;

const Login = (props) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  let credentialsError = false;

  const client = useApolloClient();

  const [login, { loading, error }] = useMutation(SIGN_IN, {
    onCompleted: ({ signIn: token }) => {
      localStorage.setItem("token", token.token);
      client.writeData({ data: { authenticated: true } });
      props.history.push("/episodes");  
    }
  });

  if (loading) return <span>Loading...</span>;
  if (error) return <p>An error occurred</p>;

  if (localStorage.getItem("token"))
    return <Redirect to="/episodes"></Redirect>;

  const handleSubmit = event => {
    event.preventDefault();

    if (userEmail && userPassword) {
      login({ variables: { email: userEmail, password: userPassword } });
    } else {
      credentialsError = true;
    }
  };

  return (
    <section>
      <Logo />
      {credentialsError && <div className="error">Invalid credentials!</div>}
      <form className="form-group" onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            value={userEmail}
            placeholder="email"
            onChange={e => setUserEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={userPassword}
            placeholder="password"
            onChange={e => setUserPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
    </section>
  );
};

export default Login;
