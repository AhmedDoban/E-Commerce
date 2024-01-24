// import files
import express from "express";
import Products_Controllers from "../Controllers/Products_Controllers.js";
import { body } from "express-validator";
import JWT from "./../Utils/JWT.js";

const Router = express.Router();

// Routes Handelar /API/Products?Page=1&Limit=10
Router.route("/").post(
  JWT.Verify_Token,
  [body("_id").notEmpty().withMessage("_id is not Valid")],
  Products_Controllers.Get_All_Products
);

// Routes Handelar /API/Products/Category?Page=1&Limit=10
Router.route("/Category").post(
  JWT.Verify_Token,
  Products_Controllers.Get_All_Category
);

// Routes Handelar /API/Products/Filter?Page=1&Limit=10
Router.route("/Filter").post(
  JWT.Verify_Token,
  [body("MIN").notEmpty().withMessage("MIN is not Valid")],
  [body("MAX").notEmpty().withMessage("MAX is not Valid")],
  [body("SEARCH").notEmpty().withMessage("SEARCH is not Valid")],
  [body("RATE").notEmpty().withMessage("RATE is not Valid")],
  [body("CATEGORY").notEmpty().withMessage("CATEGORY is not Valid")],
  [body("_id").notEmpty().withMessage("_id is not Valid")],
  Products_Controllers.Get_Filter_Products
);

// Routes Handelar /API/Products/:id
Router.route("/:id").post(
  JWT.Verify_Token,
  [body("User_Id").notEmpty().withMessage("_id is not Valid")],
  Products_Controllers.Get_Product
);

export default Router;
