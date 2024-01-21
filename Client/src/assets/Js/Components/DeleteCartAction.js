import React from "react";
import { HandleProductIsInCart } from "../Toolkit/Slice/ProductsSlice";
import { HandleRate_IsInCart } from "../Toolkit/Slice/BestRateSlice";
import { HandleMost_IsInCart } from "../Toolkit/Slice/MostSellingSlice";
import { HandleTodayIsInCart } from "../Toolkit/Slice/TodayProductsSlice";
import { HandleWeeklyIsInCart } from "../Toolkit/Slice/WeekProductsSlice";
import { useDispatch } from "react-redux";
import { DeleteFromCartSync, DeleteProduct } from "../Toolkit/Slice/CartSlice";

function DeleteCartAction(props) {
  const Dispatch = useDispatch();

  const HandelDelteAction = () => {
    const ISINCART = !props.IsinCart;
    Dispatch(DeleteProduct(props._id));
    Dispatch(DeleteFromCartSync(props._id));
    Dispatch(
      HandleProductIsInCart({
        _id: props._id,
        IsinCart: ISINCART,
      })
    );
    Dispatch(
      HandleRate_IsInCart({
        _id: props._id,
        IsinCart: ISINCART,
      })
    );
    Dispatch(
      HandleMost_IsInCart({
        _id: props._id,
        IsinCart: ISINCART,
      })
    );
    Dispatch(
      HandleTodayIsInCart({
        _id: props._id,
        IsinCart: ISINCART,
      })
    );
    Dispatch(
      HandleWeeklyIsInCart({
        _id: props._id,
        IsinCart: ISINCART,
      })
    );
  };
  return (
    <i className="fa-solid fa-trash" onClick={() => HandelDelteAction()} />
  );
}
export default DeleteCartAction;
