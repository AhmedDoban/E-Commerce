// import schema from Products modle
import { validationResult } from "express-validator";
import Products_Model from "../Models/Products_Model.js";
import Cart_Model from "../Models/Cart_Model.js";
import Rate_Model from "../Models/Rate_Model.js";
import Codes from "../utils/Codes.js";
import Seen_Products from "../Models/Seen_Products.js";
import mongoose from "mongoose";

// get all products
const Get_All_Products = async (Req, Res) => {
  const Page = +Req.query.Page || 1;
  const Limit = +Req.query.Limit || 10;
  const Skip = (Page - 1) * Limit;
  const Filter = Req.query.Filter || null;
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
    const Cart = await Cart_Model.find({ User_Id: _id });
    let CartProductsID = new Array();
    await Cart.map((ele) => CartProductsID.push(ele.Product_ID));

    if (Filter !== null) {
      const Products = await Products_Model.aggregate([
        {
          $sort:
            Filter === "RATE"
              ? { "rating.rate": -1 }
              : Filter === "WEEK"
              ? { "rating.N_of_Buy": -1 }
              : Filter === "MOST"
              ? { "rating.N_of_Watches": -1 }
              : Filter === "TODAY"
              ? { "rating.N_of_Likes": -1 }
              : { name: -1 },
        },
        { $skip: Skip },
        { $limit: Limit },
        {
          $addFields: {
            IsinCart: { $in: ["$_id", CartProductsID] },
          },
        },
      ]);

      // if the page or imit greater than number of document in the database
      if ([...Products] != 0) {
        Res.json({
          Status: Codes.SUCCESS,
          Status_Code: Codes.SUCCESS_CODE,
          Data: Products,
          No_Pages: Math.ceil((await Products_Model.find({}).count()) / Limit),
        });
      } else {
        Res.json({
          Status: Codes.FAILD,
          Status_Code: Codes.FAILD_CODE,
          message: "Page NOt Found",
        });
      }
    } else {
      const Products = await Products_Model.aggregate([
        { $skip: Skip },
        { $limit: Limit },
        {
          $addFields: {
            IsinCart: { $in: ["$_id", CartProductsID] },
          },
        },
      ]);

      // if the page or imit greater than number of document in the database
      if ([...Products] != 0) {
        Res.json({
          Status: Codes.SUCCESS,
          Status_Code: Codes.SUCCESS_CODE,
          Data: Products,
          No_Pages: Math.ceil((await Products_Model.find({}).count()) / Limit),
        });
      } else {
        Res.json({
          Status: Codes.FAILD,
          Status_Code: Codes.FAILD_CODE,
          message: "Page NOt Found",
        });
      }
    }
  } catch (err) {
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
    const UserHaveSeenProduct = await Seen_Products.findOne({
      Product_ID: _id,
      User_Id: User_Id,
    });
    // in case of  user hasn't seen the product
    if (UserHaveSeenProduct == null) {
      const NewSeen = new Seen_Products({ Product_ID: _id, User_Id: User_Id });
      await NewSeen.save();
      await Products_Model.updateOne(
        { _id: _id },
        { $inc: { "rating.N_of_Watches": 1 } }
      );
    }
    // GEt Single products From the Data Base
    const Product = await Products_Model.findOne({ _id: _id });
    const Cart = await Cart_Model.find({ User_Id: User_Id });
    const Rate = await Rate_Model.findOne({
      User_Id: User_Id,
      Product_ID: _id,
    });
    let Values = [];
    await Cart.map((ele) => Values.push(ele.Product_ID.toString()));
    let CountProduct = await Cart.filter((ele) => ele.Product_ID == _id);

    Res.json({
      Status: Codes.SUCCESS,
      Status_Code: Codes.SUCCESS_CODE,
      Data: {
        ...Product._doc,
        IsinCart: Values.includes(Product._id.toString()) ? true : false,
        User_Rate: Rate === null ? 0 : Rate.Rate,
        CountInCart: CountProduct.length > 0 ? CountProduct[0].Count : 0,
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

// get Some Category or all Category
const Get_All_Category = async (Req, Res) => {
  const Page = +Req.query.Page || 1;
  const Limit = +Req.query.Limit || 10;
  const ALL = Req.query.ALL || false;
  const Skip = (Page - 1) * Limit;

  try {
    if (ALL) {
      // GEt All Products From the Data Base
      const CATEGORY = await Products_Model.distinct("category");
      Res.json({
        Status: Codes.SUCCESS,
        Status_Code: Codes.SUCCESS_CODE,
        Data: CATEGORY,
      });
    } else {
      // GEt Some Products From the Data Base
      const SomeProducts = await Products_Model.aggregate([
        { $skip: Skip },
        { $limit: Limit },
      ]);
      const Category = new Array();
      const SetProducts = new Set();

      await SomeProducts.map((ele) => {
        return SetProducts.add(ele.category);
      });

      SetProducts.forEach((ele) => Category.push(ele));

      Res.json({
        Status: Codes.SUCCESS,
        Status_Code: Codes.SUCCESS_CODE,
        Data: Category,
      });
    }
  } catch (err) {
    Res.json({
      Status: Codes.FAILD,
      Status_Code: Codes.FAILD_CODE,
      message: "Page NOt Found",
    });
  }
};

// get Filter Products
const Get_Filter_Products = async (Req, Res) => {
  const { MIN, MAX, SEARCH, RATE, CATEGORY, _id } = Req.body;
  const Page = +Req.query.Page || 1;
  const Limit = +Req.query.Limit || 10;
  const Skip = (Page - 1) * Limit;
  try {
    const Cart = await Cart_Model.find({ User_Id: _id });
    let CartProductsID = new Array();
    await Cart.map((ele) => CartProductsID.push(ele.Product_ID));
    // GEt ALl Products From the Data Base
    const SomeProducts = await Products_Model.aggregate([
      {
        $match:
          SEARCH == "" ? {} : { name: { $regex: new RegExp(SEARCH, "i") } },
      },
      { $match: CATEGORY == "" ? {} : { category: CATEGORY } },
      { $match: RATE == 0 ? {} : { "rating.rate": RATE } },
      { $match: MIN == 0 ? {} : { price: { $gte: +MIN } } },
      { $match: MAX == 0 ? {} : { price: { $lte: +MAX } } },
      { $skip: Skip },
      { $limit: Limit },
      {
        $addFields: {
          IsinCart: { $in: ["$_id", CartProductsID] },
        },
      },
    ]);

    const ProductsCount = await Products_Model.aggregate([
      {
        $match:
          SEARCH == "" ? {} : { name: { $regex: new RegExp(SEARCH, "i") } },
      },
      { $match: CATEGORY == "" ? {} : { category: CATEGORY } },
      { $match: RATE == 0 ? {} : { "rating.rate": RATE } },
      { $match: MIN == 0 ? {} : { price: { $gte: +MIN } } },
      { $match: MAX == 0 ? {} : { price: { $lte: +MAX } } },
      { $count: "Count" },
    ]);

    Res.json({
      Status: Codes.SUCCESS,
      Status_Code: Codes.SUCCESS_CODE,
      Data: SomeProducts,
      No_Pages: Math.ceil(ProductsCount[0].Count / Limit),
    });
  } catch (err) {
    Res.json({
      Status: Codes.FAILD,
      Status_Code: Codes.FAILD_CODE,
      message: "Page NOt Found",
    });
  }
};

// get Filter Products
const Get_RecentlyShown_Products = async (Req, Res) => {
  const { _id } = Req.body;
  const Page = +Req.query.Page || 1;
  const Limit = +Req.query.Limit || 10;
  const Skip = (Page - 1) * Limit;

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
    // get user cart
    const Cart = await Cart_Model.find({ User_Id: _id });
    let CartProductsID = new Array();
    await Cart.map((ele) => CartProductsID.push(ele.Product_ID));

    // get user seen products
    const Data = await Seen_Products.aggregate([
      { $match: { User_Id: new mongoose.Types.ObjectId(_id) } },
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
            $mergeObjects: [
              "$Product",
              { IsinCart: { $in: ["$Product_ID", CartProductsID] } },
            ],
          },
        },
      },

      { $skip: Skip },
      { $limit: Limit },
    ]);

    Res.json({
      Status: Codes.SUCCESS,
      Status_Code: Codes.SUCCESS_CODE,
      Data: Data,
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
  Get_Filter_Products,
  Get_RecentlyShown_Products,
};
