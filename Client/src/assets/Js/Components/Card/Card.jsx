import React from "react";
import "./Card.css";
import Stars from "./../Stars/Stars";
import { Link } from "react-router-dom";
import ButtonAction from "../ButtonAction";

function Card(props) {
  return (
    <div className="MainCard" key={props._id}>
      <div className="card" data-aos="zoom-in">
        <div
          className={
            props.HEADER_STYLE ? `header ${props.HEADER_STYLE}` : "header"
          }
        >
          <Link to={`/Products/${props._id}`}>
            <img src={props.IMAGE} alt={props.NAME} />
          </Link>
          <div className={props.USERLIKE ? "Heart activeHeart" : "Heart"}></div>
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
          <ButtonAction
            _id={props._id}
            IsinCart={props.ISINCART}
            PRODUCT={props.PRODUCT}
          />
        </div>
      </div>
    </div>
  );
}
export default Card;
