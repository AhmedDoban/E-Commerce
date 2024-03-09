// import files
import express from "express";
import Users_controllers from "../Controllers/Users_controllers.js";
import { body } from "express-validator";
import JWT from "../Utils/JWT.js";
import upload_Avatar from "../Multer/Multer_Avatars.js";

const Router = express.Router();

// Routes Handelar /API/Users/Login
Router.route("/Login").post(
  [
    body("email")
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi)
      .withMessage("Email is not Valid"),
    body("password")
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g)
      .withMessage("Password is not Valid"),
  ],
  Users_controllers.User_Login
);

// Routes Handelar /API/Users/Register
Router.route("/Register").post(
  [
    body("FirstName").notEmpty().withMessage("First Name is Required"),
    body("LastName").notEmpty().withMessage("Last Name is Required"),
    body("email")
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi)
      .withMessage("Email is not Valid"),
    body("password")
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g)
      .withMessage("Password is not Valid"),
  ],
  Users_controllers.User_Register
);

// Routes Handelar /API/Users/Setting/Upload_Avatar
Router.route("/Setting/Upload_Avatar").post(
  JWT.Verify_Token,
  upload_Avatar.single("Avatar"),
  [
    body("_id").notEmpty().withMessage("_id is not Valid"),
    body("Token").notEmpty().withMessage("Token is not Valid"),
  ],
  Users_controllers.Update_Avatar
);

// Routes Handelar /API/Users/Setting/Upload_Changes
Router.route("/Setting/Upload_Changes").post(
  JWT.Verify_Token,
  [
    body("_id").notEmpty().withMessage("_id is not Valid"),
    body("Token").notEmpty().withMessage("Token is not Valid"),
    body("email")
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi)
      .withMessage("email is not Valid"),
    body("Mobile").notEmpty().withMessage("Mobile is not Valid"),
    body("LastName").notEmpty().withMessage("LastName is not Valid"),
    body("FirstName").notEmpty().withMessage("FirstName is not Valid"),
    body("City").notEmpty().withMessage("City is not Valid"),
    body("ZipCode")
      .matches(/^\d{5,10}$/gi)
      .notEmpty()
      .withMessage("ZipCode is not Valid"),
    body("location").notEmpty().withMessage("location is not Valid"),
  ],
  Users_controllers.Update_User_Data
);

// Routes Handelar /API/Users/Setting/Change_Password
Router.route("/Setting/Change_Password").post(
  JWT.Verify_Token,
  [
    body("_id").notEmpty().withMessage("_id is not Valid"),
    body("Token").notEmpty().withMessage("Token is not Valid"),
    body("password")
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g)
      .withMessage("Password is not Valid"),
    body("NewPassword")
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g)
      .withMessage("New Password is not Valid"),
  ],
  Users_controllers.Update_User_Password
);

// Routes Handelar /API/Users/ID
Router.route("/:User_id").post(
  JWT.Verify_Token,
  [
    body("_id").notEmpty().withMessage("_id is not Valid"),
    body("Token").notEmpty().withMessage("Token is not Valid"),
  ],
  Users_controllers.Get_Specific_User
);
export default Router;
