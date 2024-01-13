import React, { lazy, Suspense } from "react";
import { Outlet, Route, Routes } from "react-router-dom";

import Loading from "./../Components/Loading/Loading";
import Cart from "../Auth/Cart/Cart";
// Home Page
const Home = lazy(() => import("../Auth/Home/Home"));
// proudacts Page
const Products = lazy(() => import("./Products/Products"));
const ProductDetails = lazy(() =>
  import("./Products/Product Details/ProductDetails")
);
//Not Founded
const NotFounded = lazy(() => import("../Not Founded/NotFounded"));

function Auth(props) {
  return (
    <React.Fragment>
      <div className="Auth">
        <div className="page-wrpper">
          <Suspense fallback={<Loading />}>
            {/******************************* HOME *****************************************/}
            <Routes>
              <Route path="/" element={<Outlet />}>
                <Route path="" element={<Home />} />
                <Route path="Products" element={<Outlet />}>
                  <Route path="" element={<Products />} />
                  <Route path=":productId" element={<ProductDetails />} />
                </Route>
              </Route>
              {/******************************* Cart *****************************************/}
              <Route path="/Cart" element={<Cart />} />
              {/******************************* Not Founded *****************************************/}
              <Route path="*" element={<NotFounded />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Auth;
