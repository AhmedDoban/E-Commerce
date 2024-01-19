import React from "react";
import "./Rate.css";
import { useDispatch, useSelector } from "react-redux";
import { UpdateRate } from "../../Toolkit/Slice/SingleProductSlice";

function Rate() {
  const rate = useSelector((state) => state.SingleProduct.Product.User_Rate);
  const Dispatch = useDispatch();

  return (
    <div className="Make-rate">
      <input
        name="rating"
        id="star5"
        type="radio"
        value="5"
        checked={rate === 5}
        onChange={() => Dispatch(UpdateRate(5))}
      />
      <label for="star5"></label>
      <input
        name="rating"
        id="star4"
        type="radio"
        value="4"
        checked={rate === 4}
        onChange={() => Dispatch(UpdateRate(4))}
      />
      <label for="star4"></label>
      <input
        name="rating"
        id="star3"
        type="radio"
        value="3"
        checked={rate === 3}
        onChange={() => Dispatch(UpdateRate(3))}
      />
      <label for="star3"></label>
      <input
        name="rating"
        id="star2"
        type="radio"
        value="2"
        checked={rate === 2}
        onChange={() => Dispatch(UpdateRate(2))}
      />
      <label for="star2"></label>
      <input
        name="rating"
        id="star1"
        type="radio"
        value="1"
        checked={rate === 1}
        onChange={() => Dispatch(UpdateRate(1))}
      />
      <label for="star1"></label>
    </div>
  );
}
export default Rate;
