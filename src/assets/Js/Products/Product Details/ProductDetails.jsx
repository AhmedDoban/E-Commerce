import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import Stars from "../Stars";
import "./ProductDetails.css";
import PopularProducts from "../../Home/Popular Products/PopularProducts";
import Footer from "../../Components/Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";

function ProductDetails(props) {
  const params = useParams();
  const [product, SetProduct] = useState([]);
  const [color, SetColor] = useState("red");
  const [SlideProgress, SetSlideProgress] = useState(1);
  const [Counter, SetCounter] = useState(0);

  useEffect(() => {
    const fetchdata = (async) => {
      try {
        axios
          .get(`https://fakestoreapi.com/products/${params.productId}`)
          .then((data) => SetProduct(data.data));
      } catch (err) {
        throw err;
      }
    };
    fetchdata();
  }, []);
  const HandleDecrement = (index) => {
    SetCounter(Counter > 0 ? Counter - 1 : 0);
    props.HandleCountInCart(Counter, index);
  };
  const HandleIncrement = (index) => {
    SetCounter(Counter + 1);
    props.HandleCountInCart(Counter, index);
  };
  return (
    <React.Fragment>
      <Header />
      <div className="ProductDetails">
        <div className="container">
          <div className="left">
            <div className="top">
              <img src={product.image} alt={product.category} />
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
                  <img src={product.image} alt={product.category} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={product.image} alt={product.category} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={product.image} alt={product.category} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={product.image} alt={product.category} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={product.image} alt={product.category} />
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
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <Stars rate={product.rating?.rate} />
            </div>
            <div className="box">
              <h3>$549.00 or 99.99/month</h3>
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
                    color === "black" ? "color black active" : "color black "
                  }
                  onClick={() => SetColor("black")}
                ></div>
                <div
                  className={
                    color === "green" ? "color green active" : "color green "
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
                  <button onClick={() => HandleDecrement(product.id - 1)}>
                    -
                  </button>
                  {Counter}
                  <button onClick={() => HandleIncrement(product.id - 1)}>
                    +
                  </button>
                </div>
                <p>
                  only <span>{product.rating?.count} items</span> Left! Don't
                  miss it
                </p>
              </div>
              <div className="counter-items">
                <button>Buy Now </button>
                <button>Add to Cart </button>
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
      <PopularProducts />
      <Footer />
    </React.Fragment>
  );
}
export default ProductDetails;
