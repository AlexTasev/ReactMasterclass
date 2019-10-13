import React from "react";

const Login = () => {
  return (
    <section>
      <h1>SWAPP</h1>
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
