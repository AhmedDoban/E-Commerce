import React, { lazy, Suspense } from "react";
import { Outlet, Route, Routes } from "react-router-dom";

import Loading from "./../Components/Loading/Loading";
// Home Page
const Home = lazy(() => import("../Home/Home"));
// proudacts Page
const Products = lazy(() => import("../Products/Products"));
//Not Founded
const NotFounded = lazy(() => import("../Not Founded/NotFounded"));

function Auth(props) {
  return (
    <React.Fragment>
      <div className="Auth">
        <div className="page-wrpper">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Outlet />}>
                <Route
                  path=""
                  element={<Home Setlogedin={props.Setlogedin} />}
                />
                <Route
                  path="Products"
                  element={<Products Setlogedin={props.Setlogedin} />}
                />
              </Route>
              <Route path="*" element={<NotFounded />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Auth;
