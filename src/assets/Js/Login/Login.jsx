import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

function Login(props) {
  const Navigate = useNavigate();

  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const handleLogin = () => {
    localStorage.setItem("E-commerce-login", JSON.stringify(true));
    props.Setlogedin(true);
    Navigate("/");
  };

  return (
    <React.Fragment>
      <div className="login">
        <div className="clippath"></div>
        <div className="container">
          <div className="card">
            <img src={require("../../imgs/icon.svg").default} alt="" />
            <div className="split">Welcome Again</div>
            <div className="card-input">
              <label htmlFor="Email">Email</label>
              <input
                id="Email"
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => SetEmail(e.target.value)}
              />
            </div>
            <div className="card-input">
              <label htmlFor="password">password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter Your password"
                value={password}
                onChange={(e) => SetPassword(e.target.value)}
              />
            </div>
            <button onClick={handleLogin}>login</button>
            <div className="footer-login">
              <p className="split">or</p>
              <button>
                <i className="fa-brands fa-google"></i>Signin with google
              </button>
              <button>Regiter</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Login;
