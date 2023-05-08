import React, { useState } from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "./BestDeals.css";

function BestDeals() {
  const [SlideProgress, SetSlideProgress] = useState(1);
  return (
    <React.Fragment>
      <div className="spikes-reverced"></div>
      <div
        className="BestDeals"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-out"
      >
        <div className="container">
          <h1>Todays Best Deals For You!</h1>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={10}
            onSlideChange={(e) => SetSlideProgress(e.progress * 100)}
          >
            <SwiperSlide>
              <div className="card">
                <div className="header">
                  <img
                    src={require("../../../imgs/Best Deals/BestDeals (1).png")}
                    alt=""
                  />
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="footer">
                  <div className="info">
                    <span>Homepod mini</span>
                    <span className="Price">239</span>
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="header">
                  <img
                    src={require("../../../imgs/Best Deals/BestDeals (2).png")}
                    alt=""
                  />
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="footer">
                  <div className="info">
                    <span>Homepod mini</span>
                    <span className="Price">99</span>
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="header">
                  <img
                    src={require("../../../imgs/Best Deals/BestDeals (3).png")}
                    alt=""
                  />
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="footer">
                  <div className="info">
                    <span>Homepod mini</span>
                    <span className="Price">159</span>
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="header">
                  <img
                    src={require("../../../imgs/Best Deals/BestDeals (4).png")}
                    alt=""
                  />
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="footer">
                  <div className="info">
                    <span>Homepod mini</span>
                    <span className="Price">239</span>
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="header">
                  <img
                    src={require("../../../imgs/Best Deals/BestDeals (5).png")}
                    alt=""
                  />
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="footer">
                  <div className="info">
                    <span>Homepod mini</span>
                    <span className="Price">239</span>
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="header">
                  <img
                    src={require("../../../imgs/Best Deals/BestDeals (6).png")}
                    alt=""
                  />
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="footer">
                  <div className="info">
                    <span>Homepod mini</span>
                    <span className="Price">239</span>
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
      <div className="spikes"></div>
    </React.Fragment>
  );
}
export default BestDeals;
