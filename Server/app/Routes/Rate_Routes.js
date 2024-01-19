// import files
import express from "express";
import Rate_Controllers from "../Controllers/Rate_Controllers.js";
import { body } from "express-validator";
import JWT from "./../Utils/JWT.js";

const Router = express.Router();

Router.route("/UpdateRate").post(
  JWT.Verify_Token,
  [
    body("User_Id").notEmpty().withMessage("User Id is not Valid"),
    body("Product_ID").notEmpty().withMessage("Product_ID is not Valid"),
    body("Rate").notEmpty().withMessage("Rate is not Valid"),
  ],
  Rate_Controllers.Update_Rate
);

export default Router;
