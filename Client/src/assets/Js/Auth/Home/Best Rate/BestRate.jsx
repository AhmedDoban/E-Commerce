import React, { useState, useEffect } from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "./BestRate.css";
import { useDispatch, useSelector } from "react-redux";
import {
  Get_Rate_Products,
  HandleIsInCart,
} from "../../../Toolkit/Slice/BestRateSlice";
import Card from "../../../Components/Card/Card";
import {
  AddProduct,
  DeleteFromCartSync,
  DeleteProduct,
} from "../../../Toolkit/Slice/CartSlice";

function BestRate() {
  const [SlideProgress, SetSlideProgress] = useState(1);
  const Dispatch = useDispatch();
  const Products = useSelector((state) => state.BestRate.Products);

  useEffect(() => {
    Dispatch(Get_Rate_Products());
  }, []);

  return (
    <React.Fragment>
      <div className="spikes-reverced"></div>
      <div className="BestRate">
        <div className="container" data-aos="fade-up">
          <h1>Todays Best Rate For You!</h1>
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
            {Products.map((item, index) => (
              <SwiperSlide key={index}>
                <Card
                  HEADER_STYLE="WHITE"
                  _id={item._id}
                  IMAGE={item.image}
                  NAME={item.name}
                  PRICE={item.price}
                  RATE={item.rating.rate}
                  RATE_COUNT={item.rating.rate_Count}
                  ACTION={
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
                  ACTION_NAME={item.IsinCart ? "Remove" : "Add to Cart"}
                />
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
export default BestRate;
