import React, { useState, useEffect } from "react";
import "./TodaysBestDeals.css";
import { useDispatch, useSelector } from "react-redux";
import {
  Get_All_Category,
  Get_All_Products,
} from "../../../Toolkit/Slice/ProductsSlice";
import { Link } from "react-router-dom";
import Stars from "../../Products/Stars";
import { AddProduct } from "../../../Toolkit/Slice/CartSlice";

function TodaysBestDeals() {
  const [Chosen, SetChosen] = useState("");

  const Dispatch = useDispatch();
  const Products = useSelector((state) => state.Products.Products);
  const Category = useSelector((state) => state.Products.Category);

  useEffect(() => {
    Dispatch(Get_All_Products());
    Dispatch(Get_All_Category());
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
              Category.slice(0, 5).map((Catego, index) => (
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
              <div className="card" data-aos="zoom-in" key={item._id}>
                <div className="header">
                  <Link to={`/Products/${item._id}`}>
                    <img src={item.image} alt="" />
                  </Link>
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="footer">
                  <div className="info">
                    <Link to={`/Products/${item._id}`}>
                      <span>{item.name}</span>
                    </Link>
                    <span className="Price">{item.price}'$</span>
                  </div>
                  <p>{item.description}</p>
                  <Stars rate={item.rating.rate} />
                  <button onClick={() => Dispatch(AddProduct(item._id))}>
                    Add To Cart
                  </button>
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
