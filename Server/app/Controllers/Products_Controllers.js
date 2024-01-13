// import schema from Products modle
import Products_Model from "../Models/Products_Model.js";
import Codes from "../utils/Codes.js";

// distinct
// get all products
const Get_All_Products = async (Req, Res) => {
  const Page = Req.query.Page || 1;
  const Limit = Req.query.Limit || 10;
  const Skip = (Page - 1) * Limit;

  try {
    // GEt ALl products From the Data Base
    const Products = await Products_Model.find({}, { __v: 0 });
    // if the page or imit greater than number of document in the database
    if ([...Products] != 0) {
      Res.json({
        Status: Codes.SUCCESS,
        Status_Code: Codes.SUCCESS_CODE,
        Data: await Products_Model.find({}, { __v: 0 }).limit(Limit).skip(Skip),
        No_Pages: Math.ceil(Products.length / Limit),
      });
    } else {
      Res.json({
        Status: Codes.FAILD,
        Status_Code: Codes.FAILD_CODE,
        message: "Page NOt Found",
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

const Get_All_Category = async (Req, Res) => {
  try {
    // GEt ALl Category From the Data Base
    const Category = await Products_Model.distinct("category");
    Res.json({
      Status: Codes.SUCCESS,
      Status_Code: Codes.SUCCESS_CODE,
      Data: Category,
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
};
