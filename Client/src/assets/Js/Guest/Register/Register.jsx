import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register(props) {
  const Navigate = useNavigate();

  const [User, SetUser] = useState({
    email: "",
    password: "",
    Name: "",
  });

  const HandelChangeInput = (e) => {
    const { name, value } = e.target;
    SetUser({ ...User, [name]: value });
  };

  const handleRegister = () => {};

  return (
    <React.Fragment>
      <div className="Register">
        <div className="left">
          <h1>Welcome Back</h1>
          <p>
            Manage your shop efficiently on shope with our shope seller center
          </p>
          <img src={require("../../../imgs/buyers-banner.webp")} alt="" />
        </div>
        <div className="right">
          <div className="card">
            <h1>Register</h1>
            <p>please fill your information bellow</p>
            <div className="card-input">
              <label htmlFor="Name"> Name</label>
              <input
                id="Name"
                type="text"
                name="Name"
                placeholder="Enter Your Name"
                value={User.Name}
                onChange={(e) => HandelChangeInput(e)}
              />
            </div>
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

            <button onClick={handleRegister}>Register</button>
            <div className="card-register">
              <p> have an account</p>
              <Link to="/">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Register;
