import React, { useEffect, useState } from "react";
import Header from "./../../../Components/Header/Header";
import { Link, useParams } from "react-router-dom";

import Stars from "../../../Components/Stars/Stars";
import "./ProductDetails.css";
import WeeklyProducts from "../../Home/Weekly Products/WeeklyProducts";
import Footer from "./../../../Components/Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import { useDispatch, useSelector } from "react-redux";
import {
  GetProduct,
  HandleIsInCart,
} from "../../../Toolkit/Slice/SingleProductSlice";
import { Player } from "@lottiefiles/react-lottie-player";
import LoadingFetchData from "./../../../Components/Loading Fetch Data/LoadingFetchData";
import { AddProduct, DeleteProduct } from "../../../Toolkit/Slice/CartSlice";
import Rate from "../../../Components/Rate/Rate";

function ProductDetails() {
  const params = useParams();
  const Dispatch = useDispatch();
  const Product = useSelector((state) => state.SingleProduct.Product);
  const IsLoading = useSelector((state) => state.SingleProduct.loading);
  console.log(Product);
  useEffect(() => {
    Dispatch(GetProduct(params.productId));
  }, []);

  const [color, SetColor] = useState("red");
  const [SlideProgress, SetSlideProgress] = useState(1);
  const [Counter, SetCounter] = useState(0);

  const HandleDecrement = (index) => {
    SetCounter(Counter > 0 ? Counter - 1 : 0);
  };
  const HandleIncrement = (index) => {
    SetCounter(Counter + 1);
  };

  const GetPrice = () => {
    const Price = +Product.price;
    const FixedPrice = Price.toFixed(2);
    return FixedPrice;
  };
  const GetpaymentsPerMonth = () => {
    const Price = Product.price;
    const paymentsPerMonth = (Price / 6 + Price * 0.01).toFixed(2);
    return paymentsPerMonth;
  };

  return (
    <React.Fragment>
      <Header />
      {Product ? (
        IsLoading ? (
          <LoadingFetchData />
        ) : (
          <>
            <div className="ProductDetails">
              <div className="container">
                <div className="left">
                  <div className="top">
                    <img src={Product.image} alt={Product.category} />
                  </div>
                  <div className="bottom">
                    <Swiper
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      breakpoints={{
                        360: {
                          slidesPerView: 2,
                        },
                        640: {
                          slidesPerView: 3,
                        },
                        768: {
                          slidesPerView: 4,
                        },
                        992: {
                          slidesPerView: 5,
                        },
                      }}
                      spaceBetween={10}
                      onSlideChange={(e) => SetSlideProgress(e.progress * 100)}
                    >
                      <SwiperSlide>
                        <img src={Product.image} alt={Product.category} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={Product.image} alt={Product.category} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={Product.image} alt={Product.category} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={Product.image} alt={Product.category} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={Product.image} alt={Product.category} />
                      </SwiperSlide>

                      <div className="progress">
                        <span
                          className="propress-per"
                          style={{ width: `${SlideProgress}%` }}
                        ></span>
                      </div>
                    </Swiper>
                  </div>
                </div>
                <div className="right">
                  <div className="box">
                    <h2>{Product.name}</h2>
                    <p>{Product.description}</p>
                    <Stars
                      rate={Product.rating?.rate}
                      rate_Count={Product.rating?.rate_Count}
                    />
                  </div>
                  <div className="box">
                    <h3>
                      ${GetPrice()} or {GetpaymentsPerMonth()} /month
                    </h3>
                    <p>suggested payments with 6 months special financing</p>
                  </div>
                  <div className="box">
                    <h4>Choose a Color </h4>
                    <div className="color-box">
                      <div
                        className={
                          color === "red" ? "color red active" : "color red "
                        }
                        onClick={() => SetColor("red")}
                      ></div>
                      <div
                        className={
                          color === "black"
                            ? "color black active"
                            : "color black "
                        }
                        onClick={() => SetColor("black")}
                      ></div>
                      <div
                        className={
                          color === "green"
                            ? "color green active"
                            : "color green "
                        }
                        onClick={() => SetColor("green")}
                      ></div>
                      <div
                        className={
                          color === "gray" ? "color gray active" : "color gray "
                        }
                        onClick={() => SetColor("gray")}
                      ></div>
                      <div
                        className={
                          color === "blue" ? "color blue active" : "color blue "
                        }
                        onClick={() => SetColor("blue")}
                      ></div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="counter-items">
                      <div className="counter">
                        <button
                          onClick={() => HandleDecrement(Product.id)}
                          className="btnStyle"
                        >
                          -
                        </button>
                        {Counter}
                        <button
                          onClick={() => HandleIncrement(Product.id)}
                          className="btnStyle"
                        >
                          +
                        </button>
                      </div>
                      <p>
                        only <span>{Product.rating?.count} items</span> Left!{" "}
                        {Product.rating?.count < 5 && "Don'tmiss it"}
                      </p>
                    </div>
                    <div className="counter-items">
                      <Link
                        to="/Cart"
                        onClick={
                          Product.IsinCart
                            ? null
                            : () => Dispatch(AddProduct(Product._id))
                        }
                        className="btnStyle"
                      >
                        Buy Now
                      </Link>
                      <button
                        className={
                          Product.IsinCart ? "btnStyle active" : "btnStyle"
                        }
                        onClick={
                          Product.IsinCart
                            ? () => {
                                Dispatch(DeleteProduct(Product._id));
                                Dispatch(HandleIsInCart());
                              }
                            : () => {
                                Dispatch(AddProduct(Product._id));
                                Dispatch(HandleIsInCart());
                              }
                        }
                      >
                        {Product.IsinCart ? "Remove" : "Add to Cart"}
                      </button>
                    </div>
                    <div className="box-1">
                      <i className="fa-solid fa-face-smile"></i>
                      <div className="data">
                        <h5>Rate This Product</h5>
                        <Rate />
                      </div>
                    </div>
                    <div className="box-1">
                      <i className="fa-solid fa-truck-fast"></i>
                      <div className="data">
                        <h5>Free Delivery</h5>
                        <p>Enter Your postal code for Delivery Availability</p>
                      </div>
                    </div>
                    <div className="box-1">
                      <i className="fa-solid fa-cart-flatbed-suitcase"></i>
                      <div className="data">
                        <h5>return Delivery</h5>
                        <p>Free 30 Days Delivery Return . Details</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <WeeklyProducts />
          </>
        )
      ) : (
        <div className="No-ProductDetails">
          <div className="container">
            <Player
              autoplay={true}
              loop={true}
              controls={false}
              src={require("../../../../imgs/no-product.json")}
              className="No-item-player"
            />
            <p>there is no Product</p>
          </div>
        </div>
      )}

      <Footer />
    </React.Fragment>
  );
}
export default ProductDetails;
