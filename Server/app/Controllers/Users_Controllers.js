// import schema from user modle
import Users_Model from "../Models/Users_Model.js";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import Codes from "../utils/Codes.js";
import JWT from "../Utils/JWT.js";
import fs from "fs";
import mongoose from "mongoose";

// login user authentication
const User_Login = async (Req, Res) => {
  const { email, password } = Req.body;
  // Body Validation Before Searching in the database to increase performance
  const Errors = validationResult(Req);
  if (!Errors.isEmpty()) {
    return Res.json({
      Status: Codes.FAILD,
      Status_Code: Codes.FAILD_CODE,
      message: "Can't login please Try again later",
      Data: Errors.array().map((arr) => arr.msg),
    });
  }
  try {
    // Searching in the database with email may be email is wrong
    const USER = await Users_Model.findOne({ email });
    if (USER === null) {
      // invalid data in the body and not match the data in the database
      return Res.json({
        Status: Codes.FAILD,
        Status_Code: Codes.FAILD_CODE,
        message: "Email is not exist !",
      });
    } else {
      const USER_Password = await bcrypt.compare(password, USER.password);
      if (USER && USER_Password) {
        // return ther user data
        return Res.json({
          Status: Codes.SUCCESS,
          Status_Code: Codes.SUCCESS_CODE,
          Data: await Users_Model.findOne(
            { email },
            { password: 0, __v: 0, Role: 0 }
          ),
        });
      } else {
        // here found email but the password does not match
        return Res.json({
          Status: Codes.FAILD,
          Status_Code: Codes.FAILD_CODE,
          message: "Password is wrong ! ",
        });
      }
    }
  } catch (err) {
    // Error in serching handelar
    return Res.json({
      Status: Codes.FAILD,
      Status_Code: Codes.FAILD_CODE,
      message: "Sorry Something went wrong please try again later !",
    });
  }
};

// Get Specific User from database
const Get_Specific_User = async (Req, Res) => {
  const User_id = Req.params.User_id;
  const { _id, Token } = Req.body;

  const Errors = validationResult(Req);
  // Body Validation Before Searching in the database to increase performance
  if (!Errors.isEmpty()) {
    return Res.json({
      Status: Codes.FAILD,
      Status_Code: Codes.FAILD_CODE,
      message: "Can't Register please Try again later",
      data: Errors.array().map((arr) => arr.msg),
    });
  }

  try {
    // GEt user Data From the Data Base
    const USER = await Users_Model.findOne(
      { _id, Token },
      { password: 0, __v: 0, Role: 0 }
    );
    if (User_id === _id && USER !== null) {
      // return ther user data
      return Res.json({
        Status: Codes.SUCCESS,
        Status_Code: Codes.SUCCESS_CODE,
        Data: USER,
      });
    } else {
      const User = await Users_Model.findOne(
        { _id: User_id },
        { name: 1, email: 1, Mobile: 1, Avatar: 1 }
      );
      return Res.json({
        Status: Codes.SUCCESS,
        Status_Code: Codes.SUCCESS_CODE,
        Data: User,
      });
    }
  } catch (err) {
    Res.json({
      Status: Codes.FAILD,
      Status_Code: Codes.FAILD_CODE,
      message: "User not founded",
    });
  }
};

// register user authentication and store him into database
const User_Register = async (Req, Res) => {
  const { FirstName, LastName, email, password, Role } = Req.body;
  const Errors = validationResult(Req);
  // Body Validation Before Searching in the database to increase performance
  if (!Errors.isEmpty()) {
    return Res.json({
      Status: Codes.FAILD,
      Status_Code: Codes.FAILD_CODE,
      message: "Can't Register please Try again later",
      data: Errors.array().map((arr) => arr.msg),
    });
  }

  try {
    // Searching in the database to find if the user is exist
    const Check_User = await Users_Model.findOne({ email });
    if (Check_User) {
      return Res.json({
        Status: Codes.FAILD,
        Status_Code: Codes.FAILD_CODE,
        message: "User Is already exist",
      });
    } else {
      const Hashed_Password = await bcrypt.hash(
        password,
        +process.env.HASH_PASSWORD
      );

      const USER = new Users_Model({
        FirstName: FirstName,
        LastName: LastName,
        email: email,
        Role: Role,
        password: Hashed_Password,
      });

      USER.Token = await JWT.Genetate_Token(USER);

      await USER.save();

      // return user data after saving it in the database
      return Res.json({
        Status: Codes.SUCCESS,
        Status_Code: Codes.SUCCESS_CODE,
        message: "User Created Successfully",
      });
    }
  } catch (err) {
    // Error in Saving handelar
    return Res.json({
      Status: Codes.FAILD,
      Status_Code: Codes.FAILD_CODE,
      message: "Sorry Something went wrong please try again later !",
    });
  }
};

// change user avatar
const Update_Avatar = async (Req, Res) => {
  const { _id, Token } = Req.body;
  // Body Validation Before Searching in the database to increase performance
  const Errors = validationResult(Req);
  if (!Errors.isEmpty()) {
    return Res.json({
      Status: Codes.FAILD,
      Status_Code: Codes.FAILD_CODE,
      message: "Some data that was supposed to be sent is missing !",
      Data: Errors.array().map((arr) => arr.msg),
    });
  }
  try {
    const User = await Users_Model.findOne({ _id, Token });
    if (User !== null) {
      const { Avatar } = User;
      if (!Avatar.includes("Uploads/avatar.jpg")) {
        const Link = Avatar.split("http://localhost:3001/")[1];
        await fs.unlinkSync(Link);
      }
      // update the user data
      await Users_Model.updateOne(
        { _id: _id, Token: Token },
        {
          $set: {
            Avatar: `http://localhost:3001/Uploads/Avatars/${Req.file.filename}`,
          },
        }
      );
      await Res.json({
        Status: Codes.SUCCESS,
        Status_Code: Codes.SUCCESS_CODE,
        message: "Avatar Updated !",
      });
    } else {
      return Res.json({
        Status: Codes.FAILD,
        Status_Code: Codes.FAILD_CODE,
        message: "User Not Founded !",
      });
    }
  } catch (err) {
    // Error in serching handelar
    return Res.json({
      Status: Codes.FAILD,
      Status_Code: Codes.FAILD_CODE,
      message: "Sorry Something went wrong please try again later !",
    });
  }
};

// update user data
const Update_User_Data = async (Req, Res) => {
  const {
    _id,
    Token,
    email,
    Mobile,
    LastName,
    FirstName,
    City,
    ZipCode,
    location,
  } = Req.body;
  const Errors = validationResult(Req);
  // Body Validation Before Searching in the database to increase performance
  if (!Errors.isEmpty()) {
    return Res.json({
      Status: Codes.FAILD,
      Status_Code: Codes.FAILD_CODE,
      message: "some data filled Wrong ! check it and try again",
      data: Errors.array().map((arr) => arr.path),
    });
  }

  try {
    // GEt user Data From the Data Base
    const USER = await Users_Model.findOne(
      { _id, Token, LastName, email, FirstName },
      { password: 0, __v: 0, Role: 0 }
    );
    if (USER !== null) {
      // Update user Data
      await Users_Model.updateOne(
        { _id, Token, LastName, email, FirstName },
        {
          $set: {
            FirstName,
            LastName,
            Mobile,
            Address: { City, ZipCode, location },
          },
        }
      );
      return Res.json({
        Status: Codes.SUCCESS,
        Status_Code: Codes.SUCCESS_CODE,
        message: "User Updated !",
      });
    }
  } catch (err) {
    Res.json({
      Status: Codes.FAILD,
      Status_Code: Codes.FAILD_CODE,
      message: "User not founded",
    });
  }
};

// update user password
const Update_User_Password = async (Req, Res) => {
  const { _id, Token, password, NewPassword } = Req.body;
  const Errors = validationResult(Req);
  // Body Validation Before Searching in the database to increase performance
  if (!Errors.isEmpty()) {
    return Res.json({
      Status: Codes.FAILD,
      Status_Code: Codes.FAILD_CODE,
      message: "Some data that was supposed to be sent is missing !",
      data: Errors.array().map((arr) => arr.path),
    });
  }

  try {
    // GEt user Data From the Data Base
    const USER = await Users_Model.findOne({ _id, Token });
    const UserPassword = await bcrypt.compare(password, USER.password);

    if (USER !== null && UserPassword) {
      // Update user Data
      const NewUserPassword = await bcrypt.hash(
        NewPassword,
        +process.env.HASH_PASSWORD
      );
      await Users_Model.updateOne(
        { _id, Token },
        { $set: { password: NewUserPassword } }
      );
      return Res.json({
        Status: Codes.SUCCESS,
        Status_Code: Codes.SUCCESS_CODE,
        message: "Password Updated !",
      });
    } else {
      Res.json({
        Status: Codes.FAILD,
        Status_Code: Codes.FAILD_CODE,
        message: "Password is wrong !",
      });
    }
  } catch (err) {
    Res.json({
      Status: Codes.FAILD,
      Status_Code: Codes.FAILD_CODE,
      message: "User not founded",
    });
  }
};

export default {
  User_Login,
  User_Register,
  Get_Specific_User,
  Update_Avatar,
  Update_User_Data,
  Update_User_Password,
};
