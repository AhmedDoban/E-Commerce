// import files
import express from "express";
import Users_controllers from "../Controllers/Users_controllers.js";
import { body } from "express-validator";

const Router = express.Router();

// Routes Handelar /API/Users/Login
Router.route("/Login").post(
  [
    body("email")
      .notEmpty()
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi)
      .withMessage("Email is not Valid"),
    body("password")
      .notEmpty()
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gi)
      .withMessage("Password is not Valid"),
  ],
  Users_controllers.User_Login
);

export default Router;
