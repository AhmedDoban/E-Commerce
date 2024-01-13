import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetProduct = createAsyncThunk("GetProduct", async (_id) => {
  const { Token } = JSON.parse(localStorage.getItem("Token"));
  const Data = await axios.post(
    `${process.env.REACT_APP_API_URL}/Products/${_id}`,
    {},
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
  reducers: {},
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

export const {} = SingleProductSlice.actions;

export default SingleProductSlice.reducer;
