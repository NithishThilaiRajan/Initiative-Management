import React, { useState } from "react";
import Axios from "axios";
import "./App.css";
import { useDispatch } from "react-redux";
import userInfo from "./actions/userChange";
import { useHistory } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatcher = (id,name, email, loginState) => {
    dispatch(userInfo(id,name, email, loginState));
    if (loginState) history.push("/");
  };

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data === "No matching credentials") {
        console.log("Invalid credentials from login");
        dispatcher("Invalid credentials from login", email, false);
      } else if (response) {
        console.log(response.data[0].emp_name);
        dispatcher(response.data[0].emp_id,response.data[0].emp_name, email, true);
      }
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className="App" onSubmit={(event) => submitHandler(event)}>
      <div>
        <label>Email: </label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password: </label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={login}>Submit</button>
      </div>
    </form>
  );
}

export default Login;
