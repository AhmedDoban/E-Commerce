import React, { useState } from "react";
import "./Register.css";
import { useDispatch, useSelector } from "react-redux";
import { HandleRegister } from "../../Toolkit/Slice/RegisterSlice";

function Register() {
  const { loading, errors } = useSelector((State) => State.Register);
  const Dispatch = useDispatch();

  const [User, SetUser] = useState({
    email: "",
    password: "",
    FirstName: "",
    LastName: "",
  });
  const [SeePassword, SetSeePassword] = useState(false);

  const HandelChangeInput = (e) => {
    const { name, value } = e.target;
    SetUser({ ...User, [name]: value });
  };

  const handleRegister = () => {
    Dispatch(HandleRegister(User));
  };

  return (
    <React.Fragment>
      <div className="Register">
        <div className="left">
          <img src={require("../../../imgs/Register.png")} alt="" />
        </div>
        <div className="right">
          <div className="card">
            <h1>Register</h1>
            <p>please fill your information bellow</p>
            <div className="card-flex">
              <label htmlFor="NAME">
                <i className="fa-solid fa-user"></i>
              </label>
              <div className="card-input">
                <input
                  id="FirstName"
                  type="text"
                  name="FirstName"
                  placeholder="First Name"
                  value={User.FirstName}
                  onChange={(e) => HandelChangeInput(e)}
                />
                {errors.includes("First Name is Required") && (
                  <div className="error">
                    <i className="fa-solid fa-triangle-exclamation"></i>
                    <p className="Message">First Name is Required</p>
                  </div>
                )}
              </div>
              <div className="card-input">
                <input
                  id="LastName"
                  type="text"
                  name="LastName"
                  placeholder="Last Name"
                  value={User.LastName}
                  onChange={(e) => HandelChangeInput(e)}
                />
                {errors.includes("Last Name is Required") && (
                  <div className="error">
                    <i className="fa-solid fa-triangle-exclamation"></i>
                    <p className="Message">Last Name is Required</p>
                  </div>
                )}
              </div>
            </div>

            <div className="card-input">
              <label htmlFor="Email">
                <i className="fa-solid fa-envelope"></i>
              </label>
              <input
                id="Email"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={User.email}
                onChange={(e) => HandelChangeInput(e)}
              />
              {errors.includes("Email is not Valid") && (
                <div className="error">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                  <p className="Message">Email is not Valid</p>
                </div>
              )}
            </div>
            <div className="card-input">
              <label htmlFor="password">
                <i className="fa-solid fa-lock"></i>
              </label>
              <input
                id="password"
                type={SeePassword ? "text" : "password"}
                name="password"
                placeholder="Enter Your password"
                value={User.password}
                onChange={(e) => HandelChangeInput(e)}
              />
              <div className="See-password">
                <input
                  type="checkbox"
                  name="SaveInfo"
                  id="SaveInfo"
                  checked={SeePassword}
                />
                <label
                  htmlFor="SaveInfo"
                  onClick={() => SetSeePassword(!SeePassword)}
                />
              </div>
              {errors.includes("Password is not Valid") && (
                <div className="error">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                  <p className="Message">Password is not Valid</p>
                </div>
              )}
            </div>

            <button onClick={() => handleRegister()}>
              {loading ? "Loading..." : "Register"}
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Register;
