import React from "react";
import "./HowDeliveryWorks.css";

function HowDeliveryWorks() {
  return (
    <div className="HowDeliveryWorks" data-aos="fade-up">
      <div className="container">
        <h1>How It Works</h1>
        <div className="cards-container">
          <div className="card">
            <div className="header">
              <h5>Shop for the products you love</h5>
              <p>
                Whether you are planning a takeaway meal or weekly groceries,
                our comprehensive list will help you shop products you need.
              </p>
            </div>
            <div className="footer">
              <img
                src={require("../../../../imgs/Delivery/shop_product.png")}
                alt="1"
              />
            </div>
          </div>
          <div className="card">
            <div className="header">
              <h5>Get on-demand delivery or pickup</h5>
              <p>
                Opt for a pick-up service or delivery straight to your door,
                when you download the Afroqliq app.
              </p>
            </div>
            <div className="footer">
              <img
                src={require("../../../../imgs/Delivery/ondemand_1.png")}
                alt="2"
              />
            </div>
          </div>
          <div className="card">
            <div className="header">
              <h5>Save time & money</h5>
              <p>
                With Afroqliq, you can be rest assured you will have access to
                our money guarantee policy and fast delivery
              </p>
            </div>
            <div className="footer">
              <img
                src={require("../../../../imgs/Delivery/save_time_2.png")}
                alt="3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HowDeliveryWorks;
