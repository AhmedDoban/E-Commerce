import React, { useState } from "react";
import "./TodaysBestDeals.css";

function TodaysBestDeals() {
  const [Chosen, SetChosen] = useState("Gadgets");

  const HandleFilter = (data) => {
    SetChosen(data);
  };
  return (
    <React.Fragment>
      <div
        className="TodaysBestDeals"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
      >
        <div className="container">
          <h1>Todays Best Deals For You!</h1>
          {/********************** Filter *******************************/}
          <ul className="nav-menu">
            <li>
              <span
                className={Chosen === "Gadgets" ? "active" : ""}
                onClick={() => HandleFilter("Gadgets")}
              >
                Gadgets
              </span>
            </li>
            <li>
              <span
                className={Chosen === "Fashion" ? "active" : ""}
                onClick={() => HandleFilter("Fashion")}
              >
                Fashion
              </span>
            </li>
            <li>
              <span
                className={Chosen === "Toys" ? "active" : ""}
                onClick={() => HandleFilter("Toys")}
              >
                Toys
              </span>
            </li>
            <li>
              <span
                className={Chosen === "Education" ? "active" : ""}
                onClick={() => HandleFilter("Education")}
              >
                Education
              </span>
            </li>
            <li>
              <span
                className={Chosen === "Beauty" ? "active" : ""}
                onClick={() => HandleFilter("Beauty")}
              >
                Beauty
              </span>
            </li>
            <li>
              <span
                className={Chosen === "Fitness" ? "active" : ""}
                onClick={() => HandleFilter("Fitness")}
              >
                Fitness
              </span>
            </li>
            <li>
              <span
                className={Chosen === "Furniture" ? "active" : ""}
                onClick={() => HandleFilter("Furniture")}
              >
                Furniture
              </span>
            </li>
            <li>
              <span
                className={Chosen === "Sneakers" ? "active" : ""}
                onClick={() => HandleFilter("Sneakers")}
              >
                Sneakers
              </span>
            </li>
          </ul>
          {/************************** Cards *********************************/}
          <div className="cards-container">
            <div
              className="card"
              data-aos="zoom-in"
              data-aos-easing="ease-in-out"
            >
              <div className="header">
                <img
                  src={require("../../../imgs/TodaysBestDeals/TodaysBestDeals(1).png")}
                  alt=""
                />
                <i className="fa-regular fa-heart"></i>
              </div>
              <div className="footer">
                <div className="info">
                  <span>Laptop sleeve MacBook</span>
                  <span className="Price">59</span>
                </div>
                <p>Table with air purifier, stained veneer/black</p>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <button>Add To Cart</button>
              </div>
            </div>
            <div
              className="card"
              data-aos="zoom-in"
              data-aos-easing="ease-in-out"
            >
              <div className="header">
                <img
                  src={require("../../../imgs/TodaysBestDeals/TodaysBestDeals(2).png")}
                  alt=""
                />
                <i className="fa-regular fa-heart"></i>
              </div>
              <div className="footer">
                <div className="info">
                  <span>AirPods Max</span>
                  <span className="Price">559</span>
                </div>
                <p>Table with air purifier, stained veneer/black</p>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <button>Add To Cart</button>
              </div>
            </div>
            <div
              className="card"
              data-aos="zoom-in"
              data-aos-easing="ease-in-out"
            >
              <div className="header">
                <img
                  src={require("../../../imgs/TodaysBestDeals/TodaysBestDeals(3).png")}
                  alt=""
                />
                <i className="fa-regular fa-heart"></i>
              </div>
              <div className="footer">
                <div className="info">
                  <span>Flower Laptop Sleeve</span>
                  <span className="Price">39</span>
                </div>
                <p>Table with air purifier, stained veneer/black</p>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <button>Add To Cart</button>
              </div>
            </div>
            <div
              className="card"
              data-aos="zoom-in"
              data-aos-easing="ease-in-out"
            >
              <div className="header">
                <img
                  src={require("../../../imgs/TodaysBestDeals/TodaysBestDeals(4).png")}
                  alt=""
                />
                <i className="fa-regular fa-heart"></i>
              </div>
              <div className="footer">
                <div className="info">
                  <span>Supreme Water Bottle</span>
                  <span className="Price">19</span>
                </div>
                <p>Table with air purifier, stained veneer/black</p>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <button>Add To Cart</button>
              </div>
            </div>
            <div
              className="card"
              data-aos="zoom-in"
              data-aos-easing="ease-in-out"
            >
              <div className="header">
                <img
                  src={require("../../../imgs/TodaysBestDeals/TodaysBestDeals(5).png")}
                  alt=""
                />
                <i className="fa-regular fa-heart"></i>
              </div>
              <div className="footer">
                <div className="info">
                  <span>Laptop sleeve MacBook</span>
                  <span className="Price"> 59</span>
                </div>
                <p>Table with air purifier, stained veneer/black</p>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <button>Add To Cart</button>
              </div>
            </div>
            <div
              className="card"
              data-aos="zoom-in"
              data-aos-easing="ease-in-out"
            >
              <div className="header">
                <img
                  src={require("../../../imgs/TodaysBestDeals/TodaysBestDeals(6).png")}
                  alt=""
                />
                <i className="fa-regular fa-heart"></i>
              </div>
              <div className="footer">
                <div className="info">
                  <span>Macbook pro 13</span>
                  <span className="Price">1099</span>
                </div>
                <p>Table with air purifier, stained veneer/black</p>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <button>Add To Cart</button>
              </div>
            </div>
            <div
              className="card"
              data-aos="zoom-in"
              data-aos-easing="ease-in-out"
            >
              <div className="header">
                <img
                  src={require("../../../imgs/TodaysBestDeals/TodaysBestDeals(7).png")}
                  alt=""
                />
                <i className="fa-regular fa-heart"></i>
              </div>
              <div className="footer">
                <div className="info">
                  <span>HomePod mini</span>
                  <span className="Price">59</span>
                </div>
                <p>Table with air purifier, stained veneer/black</p>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <button>Add To Cart</button>
              </div>
            </div>
            <div
              className="card"
              data-aos="zoom-in"
              data-aos-easing="ease-in-out"
            >
              <div className="header">
                <img
                  src={require("../../../imgs/TodaysBestDeals/TodaysBestDeals(8).png")}
                  alt=""
                />
                <i className="fa-regular fa-heart"></i>
              </div>
              <div className="footer">
                <div className="info">
                  <span>Ipad Mini</span>
                  <span className="Price">539</span>
                </div>
                <p>Table with air purifier, stained veneer/black</p>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <button>Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default TodaysBestDeals;
