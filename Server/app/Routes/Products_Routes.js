// import files
import express from "express";
import Products_Controllers from "../Controllers/Products_Controllers.js";
import { body } from "express-validator";
import JWT from "./../Utils/JWT.js";

const Router = express.Router();

// Routes Handelar /API/Products?Page=1&Limit=10
Router.route("/").post(JWT.Verify_Token, Products_Controllers.Get_All_Products);

Router.route("/Category").post(
  JWT.Verify_Token,
  Products_Controllers.Get_All_Category
);

Router.route("/:id").post(JWT.Verify_Token, Products_Controllers.Get_Product);

export default Router;
