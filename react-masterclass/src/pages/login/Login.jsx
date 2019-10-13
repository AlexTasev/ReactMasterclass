import React from "react";
import Logo from "../../components/common/Logo"

const Login = () => {
  return (
    <section>
      <Logo/>
      <form className="form-group">
        <div>
          <input type="text" />
        </div>
        <div>
          <input type="password" />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </section>
  );
};

export default Login;
