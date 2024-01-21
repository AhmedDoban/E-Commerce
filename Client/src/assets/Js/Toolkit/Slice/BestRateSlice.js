import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const Get_Rate_Products = createAsyncThunk(
  "Rate_Products",
  async (arg, { getState }) => {
    const { Token, _id } = JSON.parse(localStorage.getItem("Token"));
    const State = getState();

    const Data = await axios.post(
      `${process.env.REACT_APP_API_URL}/Products?Page=${State.Products.CurentPage}&Limit=5&Filter=RATE`,
      { _id },
      {
        headers: {
          Authorization: Token,
        },
      }
    );
    return Data.data;
  }
);

const BestRateSlice = createSlice({
  name: "BestRateSlice",
  initialState: {
    Loading: false,
    Products: [],
    Pages: 1,
    CurentPage: 1,
  },
  reducers: {
    HandleRate_IsInCart: (State, action) => {
      const NewProductsState = [...State.Products];
      const SingleProduct = NewProductsState.filter(
        (product) => product._id == action.payload._id
      )[0];
      const ProudactId = NewProductsState.indexOf(SingleProduct);
      NewProductsState[ProudactId] = {
        ...SingleProduct,
        IsinCart: action.payload.IsinCart,
      };
      State.Products = [...NewProductsState];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(Get_Rate_Products.pending, (State, action) => {
      State.Loading = true;
    });
    builder.addCase(Get_Rate_Products.fulfilled, (State, action) => {
      State.Loading = false;
      if (action.payload.Status === "Faild") {
        return;
      } else {
        State.Products = action.payload.Data;
        State.Pages = action.payload.No_Pages;
      }
    });
    builder.addCase(Get_Rate_Products.rejected, (State, action) => {
      State.Loading = true;
    });
  },
});

export const { HandleRate_IsInCart } = BestRateSlice.actions;

export default BestRateSlice.reducer;
