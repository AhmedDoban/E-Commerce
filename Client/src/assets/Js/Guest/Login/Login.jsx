import React, { useState } from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { Handle_RemmberMe, Login_Thunk } from "../../Toolkit/Slice/UserSlice";

function Login(props) {
  // to featch user date from backend
  const Dispatch = useDispatch();
  const Remember = useSelector((state) => state.User.RememberMe);
  // store date from input
  const [User, SetUser] = useState({
    email: "",
    password: "",
  });

  const [ShowPassword, SetshowPassword] = useState(false);

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
          <img src={require("../../../imgs/Login.svg").default} alt="" />
        </div>
        <div className="right">
          <div className="card">
            <h1>Login</h1>
            <p>please fill your information bellow</p>
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
            </div>
            <div className="card-input">
              <label htmlFor="password">
                <i className="fa-solid fa-lock"></i>
              </label>
              <input
                id="password"
                type={ShowPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Your password"
                value={User.password}
                onChange={(e) => HandelChangeInput(e)}
              />
              <i
                onClick={() => SetshowPassword((prv) => !prv)}
                className={
                  ShowPassword ? "fa-regular fa-eye-slash" : "fa-regular fa-eye"
                }
              />
            </div>
            <div className="card-save">
              <input
                type="checkbox"
                name="SaveInfo"
                id="SaveInfo"
                checked={Remember}
              />
              <label
                htmlFor="SaveInfo"
                onClick={() => Dispatch(Handle_RemmberMe())}
              >
                Remember me
              </label>
              <button>Forgot password ?</button>
            </div>
            <button onClick={handleLogin}>login</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Login;
