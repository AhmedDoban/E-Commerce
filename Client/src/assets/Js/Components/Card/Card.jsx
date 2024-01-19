import React from "react";
import "./Card.css";
import Stars from "./../Stars/Stars";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="MainCard">
      <div className="card" data-aos="zoom-in" key={props._id}>
        <div className="header">
          <Link to={`/Products/${props._id}`}>
            <img src={props.IMAGE} alt="" />
          </Link>
          <i className="fa-regular fa-heart"></i>
        </div>
        <div className="footer">
          <div className="info">
            <Link to={`/Products/${props._id}`}>
              <span>{props.NAME}</span>
            </Link>
            <span className="Price">{props.PRICE}'$</span>
          </div>
          <p>{props.DESCRIPTION}</p>
          <Stars rate_Count={props.RATE_COUNT} rate={props.RATE} />
          <button onClick={props.ACTION}>{props.ACTION_NAME}</button>
        </div>
      </div>
    </div>
  );
}
export default Card;
