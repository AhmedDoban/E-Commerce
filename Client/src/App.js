import React, { useEffect } from "react";
import Auth from "./assets/Js/Auth/Auth";
import Guest from "./assets/Js/Guest/Guest";
import { useDispatch, useSelector } from "react-redux";
import {
  Login_Local,
  Login_Local_Thunk,
} from "./assets/Js/Toolkit/Slice/UserSlice";
import { GetCartProducts } from "./assets/Js/Toolkit/Slice/CartSlice";

function App() {
  const IsLogin = useSelector((state) => state.User.IsLogin);
  const Dispatch = useDispatch();

  useEffect(() => {
    Dispatch(Login_Local());
    if (IsLogin) {
      Dispatch(Login_Local_Thunk());
      Dispatch(GetCartProducts());
    }
  }, [IsLogin]);

  return IsLogin ? <Auth /> : <Guest />;
}

export default App;
