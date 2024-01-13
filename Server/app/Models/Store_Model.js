import mongoose from "mongoose";

const Store_Model = mongoose.Schema(
  {
    name: { type: String, require: true },
    description: { type: String, require: true },
    image: { type: String, require: true },
    Cover: { type: String, require: true },
    category: { type: Array, require: true },
    rate: { type: Number, require: true, default: 0 },
  },
  {
    collection: "Store",
  }
);

export default mongoose.model("Store_Model", Store_Model);
