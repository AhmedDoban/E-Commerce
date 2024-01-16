import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login.jsx";
import NotFounded from "../Not Founded/NotFounded";
import Register from "./Register/Register.jsx";
import Header from "./Header/Header.jsx";

function Guest(props) {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route
          path="/login"
          element={<Login Setlogedin={props.Setlogedin} />}
        />
        <Route
          exact
          path="/"
          element={<Login Setlogedin={props.Setlogedin} />}
        />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<NotFounded />} />
      </Routes>

    </React.Fragment>
  );
}
export default Guest;
