import mongoose from "mongoose";

const Users_Model = mongoose.Schema(
  {
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    Token: { type: String, required: true },
    Role: { type: String, enum: ["ADMIN", "USER", "MANAGER"], default: "USER" },
    Avatar: { type: String, default: "Uploads/avatar.jpg" },
    Address: {
      location: { type: String, default: "" },
      ZipCode: { type: Number, default: "" },
      City: { type: String, default: "" },
    },
    Mobile: { type: Number, default: "" },
  },
  {
    collection: "Users",
  }
);
export default mongoose.model("Users_Model", Users_Model);
