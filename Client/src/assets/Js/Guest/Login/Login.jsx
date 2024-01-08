import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useDispatch } from "react-redux";
import { Login_Thunk } from "../../Toolkit/Slice/UserSlice";

function Login(props) {
  // to navigate to home page after login
  const Navigate = useNavigate();
  // to featch user date from backend
  const Dispatch = useDispatch();
  // store date from input
  const [User, SetUser] = useState({
    email: "",
    password: "",
  });

  // handle Change all input function
  const HandelChangeInput = (e) => {
    const { name, value } = e.target;
    SetUser({ ...User, [name]: value });
  };

  const handleLogin = () => {
    Dispatch(Login_Thunk(User));
  };

  return (
    <React.Fragment>
      <div className="login">
        <div className="left">
          <h1>Welcome Back</h1>
          <p>
            Manage your shop efficiently on shope with our shope seller center
          </p>
          <img src={require("../../../imgs/buyers-banner.webp")} alt="" />
        </div>
        <div className="right">
          <div className="card">
            <h1>Login</h1>
            <p>please fill your information bellow</p>
            <div className="card-input">
              <label htmlFor="Email">Email ID</label>
              <input
                id="Email"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={User.email}
                onChange={(e) => HandelChangeInput(e)}
              />
            </div>
            <div className="card-input">
              <label htmlFor="password">password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter Your password"
                value={User.password}
                onChange={(e) => HandelChangeInput(e)}
              />
            </div>
            <div className="card-save">
              <input type="checkbox" name="SaveInfo" id="SaveInfo" />
              <label htmlFor="SaveInfo">Remember me</label>
              <button>Forgot password ?</button>
            </div>
            <button onClick={handleLogin}>login</button>
            <div className="card-register">
              <p>Don't have an account</p>
              <Link to="/Register">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Login;
