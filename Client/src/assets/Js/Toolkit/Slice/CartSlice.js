import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Toast_Handelar from "../../Components/Toast_Handelar";

export const AddProduct = createAsyncThunk(
  "AddProduct",
  async (Product_ID, { getState }) => {
    const { _id, Token } = JSON.parse(localStorage.getItem("Token"));
    const State = getState();

    const Data = await axios
      .post(
        `${process.env.REACT_APP_API_URL}/Cart/Add`,
        {
          User_Id: _id,
          Product_ID: Product_ID,
        },
        {
          headers: {
            Authorization: Token,
          },
        }
      )
      .then((res) => {
        if (res.data.Status === "Success") {
          const AllProducts = State.Products.Products;
          const Item = AllProducts.filter(
            (Product) => Product._id === Product_ID
          )[0];
          return Item;
        } else {
          Toast_Handelar("info", res.data.message);
        }
      });
    return Data;
  }
);

export const GetCartProducts = createAsyncThunk("GetCartProducts", async () => {
  const { _id, Token } = JSON.parse(localStorage.getItem("Token"));

  const Data = await axios.post(
    `${process.env.REACT_APP_API_URL}/Cart`,
    {
      User_Id: _id,
    },
    {
      headers: {
        Authorization: Token,
      },
    }
  );

  return Data.data;
});

const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    Loading: false,
    Cart: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AddProduct.pending, (State, action) => {
      State.Loading = true;
    });
    builder.addCase(AddProduct.fulfilled, (State, action) => {
      State.Loading = false;
      if (action.payload !== undefined) {
        State.Cart = [...State.Cart, { ...action.payload, Count: 1 }];
      }
    });
    builder.addCase(AddProduct.rejected, (State, action) => {
      State.Loading = true;
    });
    builder.addCase(GetCartProducts.pending, (State, action) => {
      State.Loading = true;
    });
    builder.addCase(GetCartProducts.fulfilled, (State, action) => {
      State.Loading = false;
      if (action.payload !== undefined) {
        State.Cart = action.payload.Data;
      }
    });
    builder.addCase(GetCartProducts.rejected, (State, action) => {
      State.Loading = true;
    });
  },
});

export const {} = CartSlice.actions;

export default CartSlice.reducer;
