import React, { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "./RecentlyShown.css";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../../Components/Card/Card";
import { Get_RecentlyShown_Products } from "../../../Toolkit/Slice/RecentlyShown";
import LoadingFetchData from "../../../Components/Loading Fetch Data/LoadingFetchData";

function RecentlyShown() {
  const [SlideProgress, SetSlideProgress] = useState(1);
  const Dispatch = useDispatch();
  const Products = useSelector((state) => state.RecentlyShown.Products);
  const loading = useSelector((data) => data.RecentlyShown.Loading);

  useEffect(() => {
    Dispatch(Get_RecentlyShown_Products());
  }, []);

  return (
    <React.Fragment>
      {loading && <LoadingFetchData />}
      {Products.length > 0 && (
        <div className="RecentlyShown" data-aos="fade-up">
          <div className="container">
            <h1>Recently Shown</h1>
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
                    ISINCART={item.IsinCart}
                    PRODUCT={item}
                  />
                </SwiperSlide>
              ))}

              <div className="progress">
                <span
                  className="propress-per"
                  style={{ width: `${SlideProgress}%` }}
                />
              </div>
            </Swiper>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
export default RecentlyShown;
