import React, { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "./MostSelling.css";
import { useDispatch, useSelector } from "react-redux";
import {
  Get_MostSelling_Products,
  HandleIsInCart,
} from "../../../Toolkit/Slice/MostSellingSlice";
import Card from "../../../Components/Card/Card";
import {
  AddProduct,
  DeleteFromCartSync,
  DeleteProduct,
} from "../../../Toolkit/Slice/CartSlice";

function MostSelling() {
  const [SlideProgress, SetSlideProgress] = useState(1);
  const Dispatch = useDispatch();
  const Products = useSelector((state) => state.MostSelling.Products);

  useEffect(() => {
    Dispatch(Get_MostSelling_Products());
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
            {Products.map((item, index) => (
              <SwiperSlide key={index}>
                <Card
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
    </React.Fragment>
  );
}
export default MostSelling;
