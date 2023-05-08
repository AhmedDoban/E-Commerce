import React from "react";
import "./TopCategories.css";

function TopCategories() {
  return (
    <React.Fragment>
      <div
        className="TopCategories"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-out"
      >
        <div className="container">
          <h1>Shop Our Top Categories</h1>
          <div className="cards-container">
            <div className="card">
              <h5>Furniture</h5>
              <img src={require("../../../imgs/Cards/Card(1).png")} alt="" />
            </div>
            <div className="card">
              <h5>Hand Bag</h5>
              <img src={require("../../../imgs/Cards/Card(2).png")} alt="" />
            </div>
            <div className="card">
              <h5>Books</h5>
              <img src={require("../../../imgs/Cards/Card(3).png")} alt="" />
            </div>
            <div className="card">
              <h5>Tech</h5>
              <img src={require("../../../imgs/Cards/Card(4).png")} alt="" />
            </div>
            <div className="card">
              <h5>Sneakers</h5>
              <img src={require("../../../imgs/Cards/Card(5).png")} alt="" />
            </div>
            <div className="card">
              <h5>Travel</h5>
              <img src={require("../../../imgs/Cards/Card(6).png")} alt="" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default TopCategories;
