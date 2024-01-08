import React, { useEffect } from "react";
import Auth from "./assets/Js/Auth/Auth";
import Guest from "./assets/Js/Guest/Guest";
import { useDispatch, useSelector } from "react-redux";
import {
  Login_Local,
  Login_Local_Thunk,
} from "./assets/Js/Toolkit/Slice/UserSlice";

function App() {
  const IsLogin = useSelector((state) => state.User.IsLogin);
  const Dispatch = useDispatch();

  useEffect(() => {
    const CheckLogin = JSON.parse(localStorage.getItem("E-commerce-login"));
    if (CheckLogin !== null) {
      Dispatch(Login_Local());
      Dispatch(Login_Local_Thunk());
    }
  }, [Dispatch]);

  return IsLogin ? <Auth /> : <Guest />;
}

export default App;
