import React from "react";
import { Link } from "react-router-dom";
import "./TrendingProducts.css";

function TrendingProducts() {
  return (
    <React.Fragment>
      <div className="TrendingProducts">
        <div className="container">
          <h1>Trending Products For You!</h1>
          <div className="cards-container">
            <div className="card">
              <div className="header">
                <img
                  src={require("../../../imgs/Trending Products/card(2).png")}
                  alt="2"
                />
              </div>
              <div className="footer">
                <h5>Furniture Village</h5>
                <p>Delivery with in 24 hours</p>
                <Link>Shop Now</Link>
              </div>
            </div>
            <div className="card">
              <div className="header">
                <img
                  src={require("../../../imgs/Trending Products/card(1).png")}
                  alt="1"
                />
              </div>
              <div className="footer">
                <h5>Fashion World</h5>
                <p>Delivery with in 24 hours</p>
                <Link>Shop Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default TrendingProducts;
