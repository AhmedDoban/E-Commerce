import express from "express";
import Users_Controllers from "../Controllers/Users_Controllers.js";
import { body } from "express-validator";
const Route = express.Router();

Route.route("/Register").post(
  [
    body("email")
      .notEmpty()
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi)
      .withMessage("Email is not Valid"),
    body("password")
      .notEmpty()
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gi)
      .withMessage("Password is not Valid"),
    body("name").notEmpty().withMessage("Name is not Valid"),
  ],
  Users_Controllers.HandleRegister
);

Route.route("/Login").post(
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
  Users_Controllers.HandleLogin
);

export default Route;
