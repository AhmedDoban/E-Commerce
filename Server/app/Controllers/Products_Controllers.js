// import schema from Products modle
import { validationResult } from "express-validator";
import Products_Model from "../Models/Products_Model.js";
import Cart_Model from "../Models/Cart_Model.js";
import Codes from "../utils/Codes.js";

// get all products
const Get_All_Products = async (Req, Res) => {
  const Page = Req.query.Page || 1;
  const Limit = Req.query.Limit || 10;
  const Skip = (Page - 1) * Limit;
  const { _id } = Req.body;
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
    // GEt ALl products From the Data Base
    const Products = await Products_Model.find({}, { __v: 0 })
      .limit(Limit)
      .skip(Skip);
    const Cart = await Cart_Model.find({ User_Id: _id });
    let Values = [];
    await Cart.map((ele) => Values.push(ele.Product_ID.toString()));

    const InCartProducts = await Products.map((product) => ({
      ...product._doc,
      IsinCart: Values.includes(product._id.toString()) ? true : false,
    }));

    // if the page or imit greater than number of document in the database
    if ([...Products] != 0) {
      Res.json({
        Status: Codes.SUCCESS,
        Status_Code: Codes.SUCCESS_CODE,
        Data: InCartProducts,
        No_Pages: Math.ceil((await Products_Model.find({}).count()) / Limit),
      });
    } else {
      Res.json({
        Status: Codes.FAILD,
        Status_Code: Codes.FAILD_CODE,
        message: "Page NOt Found",
      });
    }
  } catch (err) {
    console.log(err);
    Res.json({
      Status: Codes.FAILD,
      Status_Code: Codes.FAILD_CODE,
      message: "Page NOt Found",
    });
  }
};

// get Single products
const Get_Product = async (Req, Res) => {
  const _id = Req.params.id;
  const { User_Id } = Req.body;
  try {
    // GEt Single products From the Data Base
    const Product = await Products_Model.findOne({ _id: _id }, { __v: 0 });
    const Cart = await Cart_Model.find({ User_Id: User_Id });
    let Values = [];
    await Cart.map((ele) => Values.push(ele.Product_ID.toString()));

    Res.json({
      Status: Codes.SUCCESS,
      Status_Code: Codes.SUCCESS_CODE,
      Data: {
        ...Product._doc,
        IsinCart: Values.includes(Product._id.toString()) ? true : false,
      },
    });
  } catch (err) {
    Res.json({
      Status: Codes.FAILD,
      Status_Code: Codes.FAILD_CODE,
      message: "Page NOt Found",
    });
  }
};

// get all Category
const Get_All_Category = async (Req, Res) => {
  try {
    // GEt ALl Category From the Data Base
    const Distinct = await Products_Model.distinct("category");
    Res.json({
      Status: Codes.SUCCESS,
      Status_Code: Codes.SUCCESS_CODE,
      Data: Distinct,
    });
  } catch (err) {
    Res.json({
      Status: Codes.FAILD,
      Status_Code: Codes.FAILD_CODE,
      message: "Page NOt Found",
    });
  }
};

export default {
  Get_All_Products,
  Get_All_Category,
  Get_Product,
};
