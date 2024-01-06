import React, { useEffect, useState } from "react";
import Auth from "./assets/Js/Auth/Auth";
import Guest from "./assets/Js/Guest/Guest";

function App() {
  const [logedin, Setlogedin] = useState(false);

  useEffect(() => {
    const CheckLogin = JSON.parse(localStorage.getItem("E-commerce-login"));
    Setlogedin(CheckLogin);
  }, []);

  if (logedin) {
    return <Auth Setlogedin={Setlogedin} />;
  } else {
    return <Guest Setlogedin={Setlogedin} />;
  }
}

export default App;
