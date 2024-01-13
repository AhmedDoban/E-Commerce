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
  },
});

export const { HandleIsInCart } = SingleProductSlice.actions;

export default SingleProductSlice.reducer;
