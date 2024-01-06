import React from "react";
import "./CardCashback.css";
import { Link } from "react-router-dom";

function CardCashback() {
  return (
    <React.Fragment>
      <div className="CardCashback">
        <div className="container">
          <div className="left">
            <h1>Get 5% Cash Back</h1>
            <p>on Shopcart.com</p>
            <Link>Learn More</Link>
          </div>
          <div className="right">
            <img
              src={require("../../../../imgs/Card Cash back/CardCashback1.png")}
              alt="1"
            />
            <img
              src={require("../../../../imgs/Card Cash back/CardCashback2.png")}
              alt="2"
            />
            <img
              src={
                require("../../../../imgs/Card Cash back/CardCashback3.svg")
                  .default
              }
              alt="3"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default CardCashback;
