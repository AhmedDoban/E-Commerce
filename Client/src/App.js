import React, { useEffect } from "react";
import Auth from "./assets/Js/Auth/Auth";
import Guest from "./assets/Js/Guest/Guest";
import { useDispatch, useSelector } from "react-redux";
import { Login_Local } from "./assets/Js/Toolkit/Slice/UserSlice";

function App() {
  const IsLogin = useSelector((state) => state.User.IsLogin);
  const Dispatch = useDispatch();

  useEffect(() => {
    Dispatch(Login_Local());
  }, []);

  return IsLogin ? <Auth /> : <Guest />;
}

export default App;
