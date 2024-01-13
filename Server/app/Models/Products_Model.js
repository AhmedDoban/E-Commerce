import mongoose from "mongoose";

const Products_Model = mongoose.Schema(
  {
    name: { type: String, require: true },
    description: { type: String, require: true },
    price: { type: Number, require: true },
    prand: { type: String, require: true },
    image: { type: String, require: true },
    category: { type: String, require: true },
    rating: {
      rate: { type: Number, require: true, default: 0 },
      count: { type: Number, require: true, default: 0 },
      N_of_Watches: { type: Number, require: true, default: 0 },
      N_of_Likes: { type: Number, require: true, default: 0 },
    },
  },
  {
    collection: "Products",
  }
);

export default mongoose.model("Products_Model", Products_Model);
