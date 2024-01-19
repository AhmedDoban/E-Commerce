// import schema from Rate modle
import Codes from "../utils/Codes.js";
import Rate_Model from "../Models/Rate_Model.js";
import Products_Model from "../Models/Products_Model.js";
import { validationResult } from "express-validator";

// Update Single product Rate
const Update_Rate = async (Req, Res) => {
  const { User_Id, Product_ID, Rate } = Req.body;
  const Errors = validationResult(Req);
  // Body Validation Before Searching in the database to increase performance
  if (!Errors.isEmpty()) {
    return Res.json({
      Status: Codes.FAILD,
      Status_Code: Codes.FAILD_CODE,
      message: "Can't Add Rate please Try again later",
      data: Errors.array().map((arr) => arr.msg),
    });
  }
  try {
    const FindProduct = await Rate_Model.findOne({ User_Id, Product_ID });
    if (FindProduct === null) {
      const New_Rate = new Rate_Model({ User_Id, Product_ID, Rate });
      await New_Rate.save();
      const Product = await Products_Model.findOne({ _id: Product_ID });
      const ProductRate = Product.rating.rate;
      const ProductRateCount = Product.rating.rate_Count;
      const NewRatingCount = ProductRateCount + 1;
      const NewRate = (ProductRate * ProductRateCount + Rate) / NewRatingCount;

      await Products_Model.updateOne(
        { _id: Product_ID },
        {
          $set: {
            "rating.rate": NewRate,
            "rating.rate_Count": NewRatingCount,
          },
        }
      );

      Res.json({
        Status: Codes.SUCCESS,
        Status_Code: Codes.SUCCESS_CODE,
        message: "New Rate Added",
      });
    } else {
      const Product = await Products_Model.findOne({ _id: Product_ID });
      const RateUser = await Rate_Model.findOne({ Product_ID, User_Id });
      const ProductRate = Product.rating.rate;
      const ProductRateCount = Product.rating.rate_Count;
      const OldRate = RateUser.Rate;
      const NewRate =
        (ProductRate * ProductRateCount + (Rate - OldRate)) / ProductRateCount;

      await Products_Model.updateOne(
        { _id: Product_ID },
        {
          $set: {
            "rating.rate": NewRate,
          },
        }
      );
      await Rate_Model.updateOne(
        { User_Id, Product_ID },
        {
          $set: {
            Rate: Rate,
          },
        }
      );
      Res.json({
        Status: Codes.SUCCESS,
        Status_Code: Codes.SUCCESS_CODE,
        message: "Rate Updated",
      });
    }
  } catch (err) {
    console.log(err);
    Res.json({
      Status: Codes.FAILD,
      Status_Code: Codes.FAILD_CODE,
      message: "Rate Error !",
    });
  }
};

export default {
  Update_Rate,
};
