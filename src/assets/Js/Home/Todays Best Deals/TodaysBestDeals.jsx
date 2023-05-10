import React, { useState, useEffect } from "react";
import "./TodaysBestDeals.css";
import { TodaysBestDeals_data } from "../../../../dummyData";

function TodaysBestDeals() {
  const [Chosen, SetChosen] = useState("");
  const [BestDeals, SetBestDeals] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    SetBestDeals(TodaysBestDeals_data);
    if (TodaysBestDeals_data.length > 0) {
      const Data = [];
      TodaysBestDeals_data.map((item) => {
        Data.push(item.TodaysBestDeals_cat_name);
        const data = new Set(Data);
        setFilters([...data]);
      });
    }
  }, []);

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
                className={Chosen === "" ? "active" : ""}
                onClick={() => HandleFilter("")}
              >
                All
              </span>
            </li>
            {filters.map((Catego, index) => (
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
          {/************************** Cards *********************************/}
          <div className="cards-container">
            {BestDeals.filter((item) =>
              Chosen === "" ? item : item.TodaysBestDeals_cat_name === Chosen
            ).map((item, index) => (
              <div
                className="card"
                data-aos="zoom-in"
                data-aos-easing="ease-in-out"
                key={index}
              >
                <div className="header">
                  <img src={item.TodaysBestDeals_img} alt="" />
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="footer">
                  <div className="info">
                    <span>{item.TodaysBestDeals_name}</span>
                    <span className="Price">{item.TodaysBestDeals_price}</span>
                  </div>
                  <p>{item.TodaysBestDeals_des}</p>
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
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default TodaysBestDeals;
