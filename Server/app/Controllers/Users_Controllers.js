import Users_Model from "../Model/Users_Model.js";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import JWT from "../utils/JWT.js";

// Handle Login
const HandleLogin = async (Req, Res) => {
  const { email, password } = Req.body;
  const Errors = validationResult(Req);
  // body validation data for check the data that have been send
  if (!Errors.isEmpty()) {
    return Res.json({
      Status: "Faild",
      message: "Data are not Valid !",
    });
  }
  try {
    const USER = await Users_Model.findOne({ email });
    if (USER === null) {
      Res.json({
        Status: "Faild",
        message: "email not Founded !",
      });
    } else {
      const UserPassword = await bcrypt.compare(password, USER.password);
      if (USER && UserPassword) {
        Res.json({
          Status: "Success",
          Token: USER.Token,
        });
      } else {
        Res.json({
          Status: "Faild",
          message: "password Wrong !",
        });
      }
    }
  } catch (err) {
    Res.json({
      Status: "Faild",
      message: "Something happens wrong !",
    });
  }
};

// Handle Register User
const HandleRegister = async (Req, Res) => {
  const { email, password, name } = Req.body;
  const Errors = validationResult(Req);
  // body validation data for check the data that have been send
  if (!Errors.isEmpty()) {
    return Res.json({
      Status: "Faild",
      message: "Data are not Valid !",
    });
  }
  try {
    const CheckUser = await Users_Model.findOne({ email });
    if (CheckUser === null) {
      const Hashed_Password = await bcrypt.hash(
        password,
        +process.env.JWT_SECRET_KEY
      );

      const User = new Users_Model({
        email: email,
        password: Hashed_Password,
        Name: name,
      });
      User.Token = await JWT.Generate_Token(User);

      await User.save();

      Res.json({
        Status: "Success",
        message: "User Added !",
      });
    } else {
      Res.json({
        Status: "Faild",
        message: "User already exitst !",
      });
    }
  } catch (err) {
    console.log(err);
    Res.json({
      Status: "Faild",
      message: "Something happens wrong !",
    });
  }
};

export default {
  HandleRegister,
  HandleLogin,
};
