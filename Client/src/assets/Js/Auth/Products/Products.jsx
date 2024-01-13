import React, { useState, useEffect } from "react";
import "./Products.css";
import Header from "./../../Components/Header/Header";
import Footer from "./../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import PopularProducts from "../Home/Popular Products/PopularProducts";
import Services from "../Home/Services/Services";
import Stars from "./Stars";
import LoadingFetchData from "./../../Components/Loading Fetch Data/LoadingFetchData";

import { useDispatch, useSelector } from "react-redux";

import {
  Get_All_Category,
  Get_All_Products,
  HandleIsInCart,
  SeeNext,
  SeePrev,
} from "../../Toolkit/Slice/ProductsSlice";
import {
  AddProduct,
  DeleteFromCartSync,
  DeleteProduct,
} from "../../Toolkit/Slice/CartSlice";

function Products() {
  const [Chosen, SetChosen] = useState("");
  const Dispatch = useDispatch();
  const Products = useSelector((state) => state.Products.Products);
  const Category = useSelector((state) => state.Products.Category);
  const Loading = useSelector((state) => state.Products.Loading);
  const Pages = useSelector((state) => state.Products.Pages);
  const CurentPage = useSelector((state) => state.Products.CurentPage);

  useEffect(() => {
    Dispatch(Get_All_Products());
    Dispatch(Get_All_Category());
  }, []);

  const HandleFilter = (data) => {
    SetChosen(data);
  };

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
            <ul className="nav-menu">
              <li>
                <span
                  className={Chosen === "" ? "active" : ""}
                  onClick={() => HandleFilter("")}
                >
                  All
                </span>
              </li>
              {Category.map((Catego, index) => (
                <li key={index}>
                  <span
                    className={Chosen === Catego ? "active" : ""}
                    onClick={() => HandleFilter(Catego)}
                  >
                    {Catego}
                  </span>
                </li>
              ))}
            </ul>

            <div className="cards-container">
              {Products.filter((data) =>
                Chosen === "" ? data : data.category === Chosen
              ).map((item) => (
                <div className="card" data-aos="zoom-in" key={item._id}>
                  <div className="header">
                    <Link to={item._id}>
                      <img src={item.image} alt="" />
                    </Link>
                    <i className="fa-regular fa-heart"></i>
                  </div>
                  <div className="footer">
                    <div className="info">
                      <Link to={item._id}>
                        <span>{item.name}</span>
                      </Link>
                      <span className="Price">{item.price}'$</span>
                    </div>
                    <p>{item.description}</p>
                    <Stars rate={item.rating.rate} />
                    <button
                      onClick={
                        item.IsinCart
                          ? () => {
                              Dispatch(DeleteProduct(item._id));
                              Dispatch(HandleIsInCart(item._id));
                              Dispatch(DeleteFromCartSync(item._id));
                            }
                          : () => {
                              Dispatch(AddProduct(item._id));
                              Dispatch(HandleIsInCart(item._id));
                            }
                      }
                    >
                      {item.IsinCart ? "Remove" : "Add to Cart"}
                    </button>
                  </div>
                </div>
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

      <PopularProducts />
      <Services />
      <Footer />
    </React.Fragment>
  );
}
export default Products;
