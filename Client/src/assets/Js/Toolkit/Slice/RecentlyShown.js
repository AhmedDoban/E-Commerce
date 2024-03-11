import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const Get_RecentlyShown_Products = createAsyncThunk(
  "RecentlyShown",
  async (arg, { getState }) => {
    const { Token, _id } = JSON.parse(localStorage.getItem("Token"));
    const State = getState();

    const Data = await axios.post(
      `${process.env.REACT_APP_API_URL}/Products/RecentlyShown?Page=${State.Products.CurentPage}&Limit=5`,
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

const RecentlyShownSlice = createSlice({
  name: "RecentlyShownSlice",
  initialState: {
    Loading: false,
    Products: [],
    Pages: 1,
    CurentPage: 1,
  },
  reducers: {
    RecentlyShown_IsInCart: (State, action) => {
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
    builder.addCase(Get_RecentlyShown_Products.pending, (State, action) => {
      State.Loading = true;
    });
    builder.addCase(Get_RecentlyShown_Products.fulfilled, (State, action) => {
      State.Loading = false;
      if (action.payload.Status === "Faild") {
        return;
      } else {
        State.Products = action.payload.Data;
      }
    });
    builder.addCase(Get_RecentlyShown_Products.rejected, (State, action) => {
      State.Loading = true;
    });
  },
});

export const { RecentlyShown_IsInCart } = RecentlyShownSlice.actions;

export default RecentlyShownSlice.reducer;
