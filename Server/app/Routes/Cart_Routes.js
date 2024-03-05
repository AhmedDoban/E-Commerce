// import files
import express from "express";
import Cart_Controllers from "../Controllers/Cart_Controllers.js";
import { body } from "express-validator";
import JWT from "./../Utils/JWT.js";

const Router = express.Router();

// Routes Handelar /API/Cart
Router.route("/").post(
  JWT.Verify_Token,
  [body("User_Id").notEmpty().withMessage("User Id is not Valid")],
  Cart_Controllers.Get_All
);
// Routes Handelar /API/Cart/Add
Router.route("/Add").post(
  JWT.Verify_Token,
  [
    body("User_Id").notEmpty().withMessage("User Id is not Valid"),
    body("Product_ID").notEmpty().withMessage("Product_ID is not Valid"),
  ],
  Cart_Controllers.Add_To_Cart
);
// Routes Handelar /API/Cart/Delete
Router.route("/Delete").post(
  JWT.Verify_Token,
  [
    body("User_Id").notEmpty().withMessage("User Id is not Valid"),
    body("Product_ID").notEmpty().withMessage("Product_ID is not Valid"),
  ],
  Cart_Controllers.Delete_from_Cart
);
// Routes Handelar /API/Cart/UpdateCount?type= ( ADD || Remove )
Router.route("/UpdateCount").post(
  JWT.Verify_Token,
  [
    body("User_Id").notEmpty().withMessage("User Id is not Valid"),
    body("Product_ID").notEmpty().withMessage("Product_ID is not Valid"),
  ],
  Cart_Controllers.Update_Count
);

export default Router;
