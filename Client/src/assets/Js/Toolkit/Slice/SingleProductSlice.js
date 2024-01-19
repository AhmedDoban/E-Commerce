import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetProduct = createAsyncThunk("GetProduct", async (Product_id) => {
  const { Token, _id } = JSON.parse(localStorage.getItem("Token"));
  const Data = await axios.post(
    `${process.env.REACT_APP_API_URL}/Products/${Product_id}`,
    { User_Id: _id },
    {
      headers: {
        Authorization: Token,
      },
    }
  );
  return Data.data;
});

export const UpdateRate = createAsyncThunk(
  "UpdateRate",
  async (Rate, { getState }) => {
    const { Token, _id } = JSON.parse(localStorage.getItem("Token"));
    const Product_ID = getState();

    const Data = await axios.post(
      `${process.env.REACT_APP_API_URL}/Rate/UpdateRate`,
      { User_Id: _id, Product_ID: Product_ID.SingleProduct.Product._id, Rate },
      {
        headers: {
          Authorization: Token,
        },
      }
    );
    return { ...Data.data, Rate };
  }
);

const SingleProductSlice = createSlice({
  name: "SingleProduct",
  initialState: {
    loading: false,
    Product: {},
  },
  reducers: {
    HandleIsInCart: (State, action) => {
      let NewProductState = { ...State.Product };
      NewProductState = {
        ...NewProductState,
        IsinCart: !NewProductState.IsinCart,
      };
      State.Product = NewProductState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetProduct.pending, (State, Action) => {
      State.loading = true;
    });
    builder.addCase(GetProduct.fulfilled, (State, Action) => {
      State.loading = false;
      State.Product = Action.payload.Data;
    });
    builder.addCase(GetProduct.rejected, (State, Action) => {
      State.loading = false;
    });
    builder.addCase(UpdateRate.fulfilled, (State, Action) => {
      if (Action.payload.Status_Code === 200) {
        const ProductRate = State.Product.rating.rate;
        const ProductRateCount = State.Product.rating.rate_Count;
        if (State.Product.User_Rate === 0) {
          const NewRatingCount = ProductRateCount + 1;
          const NewRate =
            (ProductRate * ProductRateCount + Action.payload.Rate) /
            NewRatingCount;
          State.Product.rating.rate = NewRate;
          State.Product.User_Rate = Action.payload.Rate;
          State.Product.rating.rate_Count = NewRatingCount;
        } else {
          const OldRate = State.Product.User_Rate;
          const NewRate =
            (ProductRate * ProductRateCount + (Action.payload.Rate - OldRate)) /
            ProductRateCount;
          State.Product.rating.rate = NewRate;
          State.Product.User_Rate = Action.payload.Rate;
        }
      }
    });
  },
});

export const { HandleIsInCart } = SingleProductSlice.actions;

export default SingleProductSlice.reducer;
