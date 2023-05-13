import React, {
  lazy,
  Suspense,
  useEffect,
  useState,
  createContext,
} from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import axios from "axios";

import Loading from "./../Components/Loading/Loading";
import Cart from "../Cart/Cart";
// Home Page
const Home = lazy(() => import("../Home/Home"));
// proudacts Page
const Products = lazy(() => import("../Products/Products"));
const ProductDetails = lazy(() =>
  import("../Products/Product Details/ProductDetails")
);
//Not Founded
const NotFounded = lazy(() => import("../Not Founded/NotFounded"));

export const ProudactContext = createContext();

function Auth(props) {
  const [AllProducts, SetAllProducts] = useState([]);

  useEffect(() => {
    const GetProducts = async () => {
      try {
        await axios.get("https://fakestoreapi.com/products").then((Data) => {
          SetAllProducts(
            Data.data.map((pro) => ({
              ...pro,
              isInCard: false,
              CountInCart: 0,
            }))
          );
        });
      } catch (errr) {
        throw errr;
      }
    };

    GetProducts();
  }, []);

  const HandleIsInCart = (index) => {
    //clone
    let Data = [...AllProducts];
    // Edit
    Data[index] = {
      ...Data[index],
      isInCard: !Data[index].isInCard,
      CountInCart: 1,
    };
    // upDate
    SetAllProducts(Data);
  };

  const HandleCountInCart = (data, index) => {
    console.log(index);
    console.log(data);
    //clone
    let Data = [...AllProducts];
    // Edit
    Data[index] = { ...Data[index], CountInCart: data, isInCard: true };
    // upDate
    SetAllProducts(Data);
  };

  return (
    <React.Fragment>
      <div className="Auth">
        <div className="page-wrpper">
          <ProudactContext.Provider value={AllProducts}>
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
                        />
                      }
                    />
                    <Route
                      path=":productId"
                      element={
                        <ProductDetails HandleCountInCart={HandleCountInCart} />
                      }
                    />
                  </Route>
                </Route>
                {/******************************* Cart *****************************************/}
                <Route path="/Cart" element={<Cart />} />
                {/******************************* Not Founded *****************************************/}
                <Route path="*" element={<NotFounded />} />
              </Routes>
            </Suspense>
          </ProudactContext.Provider>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Auth;
