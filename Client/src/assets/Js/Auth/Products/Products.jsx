import React, { useEffect } from "react";
import "./Products.css";
import Header from "./../../Components/Header/Header";
import Footer from "./../../Components/Footer/Footer";
import Services from "../Home/Services/Services";
import LoadingFetchData from "./../../Components/Loading Fetch Data/LoadingFetchData";
import Card from "../../Components/Card/Card";
import WeeklyProducts from "../Home/Weekly Products/WeeklyProducts";
import { useDispatch, useSelector } from "react-redux";

import {
  Get_All_Category,
  Get_All_Products,
  SeeNext,
  SeePrev,
} from "../../Toolkit/Slice/ProductsSlice";
import FilterProducts from "./FilterProducts/FilterProducts";

function Products() {
  const Dispatch = useDispatch();
  const Products = useSelector((state) => state.Products.Products);
  const Loading = useSelector((state) => state.Products.Loading);
  const Pages = useSelector((state) => state.Products.Pages);
  const CurentPage = useSelector((state) => state.Products.CurentPage);

  useEffect(() => {
    Dispatch(Get_All_Products());
    Dispatch(Get_All_Category());
  }, []);

  const HandleNext = () => {
    Dispatch(SeeNext());
    Dispatch(Get_All_Products());
  };
  const HandlePrev = () => {
    Dispatch(SeePrev());
    Dispatch(Get_All_Products());
  };

  return (
    <React.Fragment>
      <Header />
      {Loading ? (
        <LoadingFetchData />
      ) : (
        <div className="Products">
          <div className="header">
            <div className="container">
              <div className="data">
                <h5>Grab Upto 50% Off On Selected HeadPhone </h5>
                <button>Buy Now</button>
              </div>
              <div className="data">
                <img
                  src={require("../../../imgs/bacgroundProudacts.png")}
                  alt="bacgroundProudacts"
                />
              </div>
            </div>
          </div>
          <div className="container">
            <FilterProducts />
            <div className="cards-container">
              {Products.map((item) => (
                <Card
                  _id={item._id}
                  IMAGE={item.image}
                  NAME={item.name}
                  PRICE={item.price}
                  RATE={item.rating.rate}
                  RATE_COUNT={item.rating.rate_Count}
                  ISINCART={item.IsinCart}
                  PRODUCT={item}
                />
              ))}
            </div>

            <div className="see-more">
              <button
                onClick={() => HandlePrev()}
                className={CurentPage === 1 && "active"}
                disabled={CurentPage === 1 && "active"}
              >
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button
                onClick={() => HandleNext()}
                className={CurentPage === Pages && "active"}
                disabled={CurentPage === Pages && "active"}
              >
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      <WeeklyProducts />
      <Services />
      <Footer />
    </React.Fragment>
  );
}
export default Products;
