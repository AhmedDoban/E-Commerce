import React, { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./assets/Js/Components/Loading/Loading";

import Login from "./assets/Js/Login/Login";

const Home = lazy(() => import("./assets/Js/Home/Home"));
const NotFounded = lazy(() => import("./assets/Js//Not Founded/NotFounded"));

function App() {
  const [logedin, Setlogedin] = useState(false);

  useEffect(() => {
    const CheckLogin = JSON.parse(localStorage.getItem("E-commerce-login"));
    if (CheckLogin === null) {
      Setlogedin(false);
      return;
    }
    Setlogedin(CheckLogin);
  }, [logedin]);

  if (logedin) {
    return (
      <div className="App">
        <div className="page-wrpper">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/home" element={<Home Setlogedin={Setlogedin} />} />
              <Route
                exact
                path="/"
                element={<Home Setlogedin={Setlogedin} />}
              />
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
          <Login Setlogedin={Setlogedin} />
        </div>
      </div>
    );
  }
}

export default App;
