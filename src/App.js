import React, { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Loading from "./assets/Js/Components/Loading/Loading";

import Login from "./assets/Js/Login/Login";

const Home = lazy(() => import("./assets/Js/Home/Home"));
const NotFounded = lazy(() => import("./assets/Js//Not Founded/NotFounded"));

function App() {
  const Navigate = useNavigate();
  const [logedin, Setlogedin] = useState(false);

  useEffect(() => {
    const CheckLogin = JSON.parse(localStorage.getItem("E-commerce-login"));
    if (CheckLogin === null) {
      Setlogedin(false);
      Navigate("/");
      return;
    }
    Setlogedin(CheckLogin);
  }, []);

  if (logedin) {
    return (
      <div className="App">
        <div className="page-wrpper">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/home" element={<Home Setlogedin={Setlogedin} />} />
              <Route path="/" element={<Home Setlogedin={Setlogedin} />} />
              <Route path="*" element={<NotFounded />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <div className="page-wrpper">
          <Routes>
            <Route path="/login" element={<Login Setlogedin={Setlogedin} />} />
            <Route exact path="/" element={<Login Setlogedin={Setlogedin} />} />
            <Route path="*" element={<NotFounded />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
