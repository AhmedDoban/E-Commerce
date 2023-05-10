import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import NotFounded from "../Not Founded/NotFounded";
function Guest(props) {
  return (
    <React.Fragment>
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
        <Route path="*" element={<NotFounded />} />
      </Routes>
    </React.Fragment>
  );
}
export default Guest;
