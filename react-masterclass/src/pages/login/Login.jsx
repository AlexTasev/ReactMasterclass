import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Logo from "../../components/common/Logo";

const Login = ({ signInUser }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  let credentialsError = false;

  const handleSubmit = event => {
    event.preventDefault();

    if (userEmail && userPassword) {
      const user = { email: userEmail, password: userPassword };
      signInUser(user);
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
