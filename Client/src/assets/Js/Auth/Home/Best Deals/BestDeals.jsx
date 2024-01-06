import React, { useState, useEffect } from "react";
import { BestDeals_Data } from "../../../../../dummyData";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "./BestDeals.css";

function BestDeals() {
  const [SlideProgress, SetSlideProgress] = useState(1);
  const [BestDeals, SetBestDeals] = useState([]);

  useEffect(() => {
    SetBestDeals(BestDeals_Data);
  }, []);

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
            {BestDeals.map((BestDeal, index) => (
              <SwiperSlide key={index}>
                <div className="card">
                  <div className="header">
                    <img src={BestDeal.BestDeals_img} alt="" />
                    <i className="fa-regular fa-heart"></i>
                  </div>
                  <div className="footer">
                    <div className="info">
                      <span>{BestDeal.BestDeals_name}</span>
                      <span className="Price">{BestDeal.BestDeals_price}</span>
                    </div>
                    <p>{BestDeal.BestDeals_des}</p>
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
      <div className="spikes"></div>
    </React.Fragment>
  );
}
export default BestDeals;
