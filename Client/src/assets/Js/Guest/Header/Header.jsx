import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <React.Fragment>
      <div className="Header-Guest">
        <div className="container">
          <div className="logo">
            <img src={require("../../../imgs/icon.svg").default} alt="logo" />
          </div>
          <div className="Navigators">
            <ul>
              <li>
                <NavLink to="">Login</NavLink>
              </li>
              <li>
                <NavLink to="/Register">Register</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Header;
