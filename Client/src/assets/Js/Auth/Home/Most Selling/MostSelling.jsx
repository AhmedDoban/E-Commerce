import React, { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "./MostSelling.css";
import { Most_Selling_Product } from "../../../../../dummyData";

function MostSelling() {
  const [SlideProgress, SetSlideProgress] = useState(1);
  const [MostSelling_data, SetMostSelling_data] = useState([]);

  useEffect(() => {
    SetMostSelling_data(Most_Selling_Product);
  }, []);
  return (
    <React.Fragment>
      <div className="MostSelling" data-aos="fade-up">
        <div className="container">
          <h1>Most Selling Products</h1>
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
            {MostSelling_data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="card">
                  <div className="header">
                    <img src={item.Weekly_Popular_Products_img} alt="" />
                    <i className="fa-regular fa-heart"></i>
                  </div>
                  <div className="footer">
                    <div className="info">
                      <span>{item.Weekly_Popular_Products_name}</span>
                      <span className="Price">
                        {item.Weekly_Popular_Products_price}
                      </span>
                    </div>
                    <p>{item.Weekly_Popular_Products_des}</p>
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
            ))}

            <div className="progress">
              <span
                className="propress-per"
                style={{ width: `${SlideProgress}%` }}
              ></span>
            </div>
          </Swiper>
        </div>
      </div>
    </React.Fragment>
  );
}
export default MostSelling;
