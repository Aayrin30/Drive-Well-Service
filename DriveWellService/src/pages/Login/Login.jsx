import React, { useContext, useState } from "react";
import "./Login.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toastAction } from "../../utils/toastAction";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", { username, password });
      if (res.data) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data});
        toastAction.success("Login successfully");
      }
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (err) {
      toastAction.error(err.response.data.errors);
      dispatch({ type: "LOGIN_FAIL", payload: err.response.data });
    }
  };
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h1 className="title">SIGN IN</h1>
        <form className="login-form">
          <input
            type="text"
            className="input"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="input"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button" disabled={loading} onClick={handleClick}>
            LOGIN
          </button>
          <a href="/forget" className="link">
            Don't you remember the password?
          </a>
          <a href="/register" className="link">
            Create the new account
          </a>
        </form>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
