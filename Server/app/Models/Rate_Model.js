import mongoose from "mongoose";

const Rate_Model = mongoose.Schema(
  {
    User_Id: { type: mongoose.Types.ObjectId, require: true },
    Product_ID: { type: mongoose.Types.ObjectId, require: true },
    Rate: { type: Number, require: true },
  },
  {
    collection: "Rate",
  }
);

export default mongoose.model("Rate_Model", Rate_Model);
