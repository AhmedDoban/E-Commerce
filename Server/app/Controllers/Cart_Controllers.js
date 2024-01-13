// import files
import { validationResult } from "express-validator";
import Cart_Model from "../Models/Cart_Model.js";
import Codes from "../utils/Codes.js";
import mongoose from "mongoose";

// Get all products in Cart
const Get_All = async (Req, Res) => {
  const { User_Id } = Req.body;

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
    // GEt all products in cart  From the Data Base
    const Cart = await Cart_Model.aggregate([
      {
        $match: {
          User_Id: new mongoose.Types.ObjectId(User_Id),
        },
      },
      {
        $lookup: {
          from: "Products",
          localField: "Product_ID",
          foreignField: "_id",
          as: "Product",
        },
      },
      { $unwind: "$Product" },
      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: ["$Product", { Count: "$Count" }],
          },
        },
      },
    ]);

    Res.json({
      Status: Codes.SUCCESS,
      Status_Code: Codes.SUCCESS_CODE,
      Data: Cart,
    });
  } catch (err) {
    Res.json({
      Status: Codes.FAILD,
      Status_Code: Codes.FAILD_CODE,
      message: "something happens wrong",
    });
  }
};

// Add Single products To Cart
const Add_To_Cart = async (Req, Res) => {
  const { User_Id, Product_ID } = Req.body;
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
    // GEt Single products From the Data Base
    const Product = await Cart_Model.findOne({ User_Id, Product_ID });

    if (Product === null) {
      const AddItem = new Cart_Model({ User_Id, Product_ID });
      await AddItem.save();
      Res.json({
        Status: Codes.SUCCESS,
        Status_Code: Codes.SUCCESS_CODE,
        message: "product added !",
      });
    } else {
      Res.json({
        Status: Codes.FAILD,
        Status_Code: Codes.FAILD_CODE,
        message: "product already added !",
      });
    }
  } catch (err) {
    console.log(err);
    Res.json({
      Status: Codes.FAILD,
      Status_Code: Codes.FAILD_CODE,
      message: "product can't be added !",
    });
  }
};

// Delete Single products From Cart
const Delete_from_Cart = async (Req, Res) => {
  const { User_Id, Product_ID } = Req.body;
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
    // GEt Single products From the Data Base
    const Product = await Cart_Model.findOne({ User_Id, Product_ID });

    if (Product !== null) {
      await Cart_Model.deleteOne({ User_Id, Product_ID });
      Res.json({
        Status: Codes.SUCCESS,
        Status_Code: Codes.SUCCESS_CODE,
        message: "product Deleted !",
      });
    } else {
      Res.json({
        Status: Codes.FAILD,
        Status_Code: Codes.FAILD_CODE,
        message: "You want delete item not Founded in Cart !",
      });
    }
  } catch (err) {
    console.log(err);
    Res.json({
      Status: Codes.FAILD,
      Status_Code: Codes.FAILD_CODE,
      message: "product can't be Deleted !",
    });
  }
};

export default {
  Add_To_Cart,
  Get_All,
  Delete_from_Cart,
};
