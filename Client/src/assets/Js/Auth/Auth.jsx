import React, {
  lazy,
  Suspense,

  useState,
  createContext,
} from "react";
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

export const ProudactContext = createContext();

function Auth(props) {
  const [AllProducts, SetAllProducts] = useState([]);

  const HandleIsInCart = (id) => {
    //clone
    let Data = [...AllProducts];
    let Proudact = Data.filter((AllProudacts) => +AllProudacts.id === +id)[0];
    const ProudactId = Data.indexOf(Proudact);
    // Edit
    if (Proudact.isInCard === true) {
      Data[ProudactId] = {
        ...Data[ProudactId],
        isInCard: false,
        CountInCart: 0,
      };
    } else {
      Data[ProudactId] = {
        ...Data[ProudactId],
        isInCard: true,
        CountInCart: 0,
      };
    }
    // upDate
    SetAllProducts(Data);
  };

  const HandleDecrement = (id) => {
    //clone
    let Data = [...AllProducts];
    let Proudact = Data.filter((AllProudacts) => +AllProudacts.id === +id)[0];
    const ProudactId = Data.indexOf(Proudact);
    // Edit
    let Counter = Data[ProudactId].CountInCart;
    Counter--;

    if (Counter <= 0) {
      Data[ProudactId] = {
        ...Data[ProudactId],
        CountInCart: 0,
        isInCard: false,
      };
    } else {
      Data[ProudactId] = {
        ...Data[ProudactId],
        CountInCart: Counter,
        isInCard: true,
      };
    }
    // upDate
    SetAllProducts(Data);
  };
  const HandleIncrement = (id) => {
    //clone
    let Data = [...AllProducts];
    let Proudact = Data.filter((AllProudacts) => +AllProudacts.id === +id)[0];
    const ProudactId = Data.indexOf(Proudact);
    let Counter = Data[ProudactId].CountInCart;
    Counter++;
    // Edit
    Data[ProudactId] = {
      ...Data[ProudactId],
      CountInCart: Counter,
      isInCard: true,
    };
    // upDate
    SetAllProducts(Data);
  };

  return (
    <React.Fragment>
      <div className="Auth">
        <div className="page-wrpper">
          <Suspense fallback={<Loading />}>
            {/******************************* HOME *****************************************/}
            <Routes>
              <Route path="/" element={<Outlet />}>
                <Route
                  path=""
                  element={<Home Setlogedin={props.Setlogedin} />}
                />
                <Route path="Products" element={<Outlet />}>
                  <Route
                    path=""
                    element={
                      <Products
                        Setlogedin={props.Setlogedin}
                        AllProducts={AllProducts}
                        HandleIsInCart={HandleIsInCart}
                        HandleDecrement={HandleDecrement}
                        HandleIncrement={HandleIncrement}
                      />
                    }
                  />
                  <Route
                    path=":productId"
                    element={
                      <ProductDetails
                        HandleDecrement={HandleDecrement}
                        HandleIncrement={HandleIncrement}
                        HandleIsInCart={HandleIsInCart}
                      />
                    }
                  />
                </Route>
              </Route>
              {/******************************* Cart *****************************************/}
              <Route
                path="/Cart"
                element={
                  <Cart
                    HandleIsInCart={HandleIsInCart}
                    HandleDecrement={HandleDecrement}
                    HandleIncrement={HandleIncrement}
                  />
                }
              />
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
