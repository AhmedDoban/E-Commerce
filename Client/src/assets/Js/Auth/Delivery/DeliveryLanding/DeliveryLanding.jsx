import React from "react";
import "./DeliveryLanding.css";

function DeliveryLanding() {
  const advantage_serverces = [
    {
      text: "Fast Delivery",
      image: require("../../../../imgs/Delivery/FastDelivery.png"),
    },
    {
      text: "100% Money Guarantee",
      image: require("../../../../imgs/Delivery/MoneyGuarantee.png"),
    },
    {
      text: "24/7 Customer Support",
      image: require("../../../../imgs/Delivery/CustomerSupport.png"),
    },
    {
      text: "Safe and Secure Payment Options",
      image: require("../../../../imgs/Delivery/PaymentOptions.png"),
    },
  ];
  return (
    <React.Fragment>
      <div className="DeliveryLanding">
        <div className="container">
          <div className="left">
            <div className="advantage-serverces">
              {advantage_serverces.map((servece, index) => (
                <div className="card" data-aos="fade-up" key={index}>
                  <img src={servece.image} alt={servece.text} />
                  <p>{servece.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="right">
            <img
              src={require("../../../../imgs/Delivery/Delivery.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default DeliveryLanding;
