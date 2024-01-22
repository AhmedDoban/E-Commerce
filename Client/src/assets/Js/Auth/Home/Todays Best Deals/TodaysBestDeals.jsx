import React, { useState, useEffect } from "react";
import "./TodaysBestDeals.css";
import { useDispatch, useSelector } from "react-redux";

import Card from "../../../Components/Card/Card";
import {
  Get_Today_Category,
  Get_Today_Products,
} from "../../../Toolkit/Slice/TodayProductsSlice";

function TodaysBestDeals() {
  const [Chosen, SetChosen] = useState("");

  const Dispatch = useDispatch();
  const Products = useSelector((state) => state.TodayProducts.Products);
  const Category = useSelector((state) => state.TodayProducts.Category);

  useEffect(() => {
    Dispatch(Get_Today_Products());
    Dispatch(Get_Today_Category());
  }, []);

  const HandleFilter = (data) => {
    SetChosen(data);
  };

  return (
    <React.Fragment>
      <div className="TodaysBestDeals" data-aos="fade-up">
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
            {Category &&
              Category.map((Catego, index) => (
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
            {Products.filter((item) =>
              Chosen === "" ? item : item.category === Chosen
            ).map((item) => (
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
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default TodaysBestDeals;
