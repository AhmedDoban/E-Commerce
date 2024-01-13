import mongoose from "mongoose";

const Cart_Model = mongoose.Schema(
  {
    User_Id: { type: mongoose.Types.ObjectId, require: true },
    Product_ID: { type: mongoose.Types.ObjectId, require: true },
    Count: { type: Number, require: true, default: 1 },
  },
  {
    collection: "Cart",
  }
);

export default mongoose.model("Cart_Model", Cart_Model);
