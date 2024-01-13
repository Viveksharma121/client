import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/logo.png";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setdepartment] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();
  const handleLogin = () => {
    if (email === "" || password === "" || department === "") {
      window.alert("Please enter the misisng fields");
    }
    if (
      (email === "user123" && password === "user123") ||
      (email === "vivek" && password === "vivek")
    ) {
      localStorage.setItem("aiuser", email);
      localStorage.setItem("aidept", department);
      navigate("/main");
    }
  };

  return (
    <div className="full " style={{ background: "black" }}>
      <div className="topp" style={{ color: "white" }}>
        <img src={logo} alt="Logo" height={"40rem"} />
      </div>
      <div className="container">
        <div className="header">
          <h1>Welcome back</h1>
          <p className="signInText">Sign in to continue to Aiworksquad</p>
        </div>
        <div className="textbox">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ margin: "1rem", width: "250px" }}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ margin: "1rem", width: "250px" }}
          />
          <input
            type="text"
            placeholder="department"
            value={department}
            onChange={(e) => setdepartment(e.target.value)}
            style={{ margin: "1rem", width: "250px" }}
          />
        </div>

        <div>
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            style={{ marginLeft: "9.6rem", marginTop: "6px" }}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <span className="text" style={{ marginLeft: "-10rem" }}>
            Remember me
          </span>
          <span className="text" style={{ marginLeft: "2rem" }}>
            Forgot Password?
          </span>
        </div>

        <button className="button" onClick={handleLogin}>
          Login
        </button>
      </div>
      <div className="footer"> 2023 AiworkSquad</div>
    </div>
  );
};

export default Login;
