import mongoose from "mongoose";

const Seen_Products = mongoose.Schema(
  {
    User_Id: { type: mongoose.Types.ObjectId, require: true },
    Product_ID: { type: mongoose.Types.ObjectId, require: true },
  },
  {
    collection: "Seen_Products",
  }
);

export default mongoose.model("Seen_Products", Seen_Products);
