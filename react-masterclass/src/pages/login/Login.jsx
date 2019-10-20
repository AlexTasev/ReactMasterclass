import React, { useState } from "react";
import Logo from "../../components/common/Logo";

const Login = ({ signInUser }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  let credebtialsError = false;

  const handleSubmit = event => {
    event.preventDefault();

    if (userEmail && userPassword) {
      const user = { email: userEmail, password: userPassword };
      console.log(user);
    } else {
      credebtialsError = true;
    }
  };

  return (
    <section>
      <Logo />
      {credebtialsError && <div className="error">Invalid credentials!</div>}
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
