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
    if (Data[index].isInCard === true) {
      Data[index] = {
        ...Data[index],
        isInCard: false,
        CountInCart: 0,
      };
    } else {
      Data[index] = {
        ...Data[index],
        isInCard: true,
        CountInCart: 1,
      };
    }
    // upDate
    SetAllProducts(Data);
  };

  const HandleDecrement = (index) => {
    //clone
    let Data = [...AllProducts];
    // Edit
    let Counter = Data[index].CountInCart;
    Counter--;

    if (Counter <= 0) {
      Data[index] = {
        ...Data[index],
        CountInCart: 0,
        isInCard: false,
      };
    } else {
      Data[index] = {
        ...Data[index],
        CountInCart: Counter,
        isInCard: true,
      };
    }
    // upDate
    SetAllProducts(Data);
  };
  const HandleIncrement = (index) => {
    //clone
    let Data = [...AllProducts];
    let Counter = Data[index].CountInCart;
    Counter++;
    // Edit
    Data[index] = {
      ...Data[index],
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
          </ProudactContext.Provider>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Auth;
