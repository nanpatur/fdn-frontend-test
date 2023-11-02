import React, { useState } from "react";
import { useLogin } from "../../domain/auth/hooks";

const LoginPage = () => {
  const [loginBody, setLoginBody] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setLoginBody({ ...loginBody, [name]: value });
  };

  // const { mutate } = useLogin(loginBody, {
  //   onSuccess: (data) => {
  //     console.log(data, "Success");
  //   },
  //   onError: (error) => {
  //     console.log("Error", error);
  //   },
  // });

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(loginBody);
    // mutate();
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={loginBody.username}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={loginBody.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
