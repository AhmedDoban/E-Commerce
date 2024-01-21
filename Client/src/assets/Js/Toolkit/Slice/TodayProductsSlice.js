import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const Get_Today_Products = createAsyncThunk(
  "TodayProducts",
  async (arg, { getState }) => {
    const { Token, _id } = JSON.parse(localStorage.getItem("Token"));
    const State = getState();

    const Data = await axios.post(
      `${process.env.REACT_APP_API_URL}/Products?Page=${State.TodayProducts.CurentPage}&Limit=8&Filter=TODAY`,
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

export const Get_Today_Category = createAsyncThunk(
  "TodayCategory",
  async (arg, { getState }) => {
    const { Token } = JSON.parse(localStorage.getItem("Token"));
    const State = getState();
    const Data = await axios.post(
      `${process.env.REACT_APP_API_URL}/Products/Category?Page=${State.TodayProducts.CurentPage}&Limit=8`,
      {},
      {
        headers: {
          Authorization: Token,
        },
      }
    );
    return Data.data;
  }
);

const Today_Products_Slice = createSlice({
  name: "TodayProductsSlice",
  initialState: {
    Loading: false,
    Products: [],
    Category: [],
    Pages: 1,
    CurentPage: 1,
  },
  reducers: {
    HandleTodayIsInCart: (State, action) => {
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
    builder.addCase(Get_Today_Products.pending, (State, action) => {
      State.Loading = true;
    });
    builder.addCase(Get_Today_Products.fulfilled, (State, action) => {
      State.Loading = false;
      if (action.payload.Status === "Faild") {
        return;
      } else {
        State.Products = action.payload.Data;
        State.Pages = action.payload.No_Pages;
      }
    });
    builder.addCase(Get_Today_Products.rejected, (State, action) => {
      State.Loading = true;
    });
    builder.addCase(Get_Today_Category.pending, (State, action) => {
      State.Loading = true;
    });
    builder.addCase(Get_Today_Category.fulfilled, (State, action) => {
      State.Loading = false;
      State.Category = action.payload.Data;
    });
    builder.addCase(Get_Today_Category.rejected, (State, action) => {
      State.Loading = true;
    });
  },
});

export const { HandleTodayIsInCart } = Today_Products_Slice.actions;

export default Today_Products_Slice.reducer;
